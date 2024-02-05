import { useState, type FC, type ReactNode, type SetStateAction, type Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { SidePanelDesktop } from '@alfalab/core-components-side-panel/desktop';
import style from './Sidebar.module.scss';

interface SidebarProps {
  children: ReactNode;
  initOpen?: boolean;
  shouldJustClose?: boolean;
  externalIsOpen?: boolean;
  externalSetIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({
  children,
  shouldJustClose = false,
  initOpen = true,
  externalIsOpen,
  externalSetIsOpen,
}) => {
  const [isOpen, setIsOpen] = useState(initOpen);
  const navigate = useNavigate();
  const handleClose = () => {
    if (!shouldJustClose) {
      navigate(-1);
    }
    if (externalSetIsOpen) {
      externalSetIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };
  const content = (
    <SidePanelDesktop
      onClose={handleClose}
      nativeScrollbar={false}
      hasCloser
      className={style.Sidebar}
      open={externalIsOpen !== undefined ? externalIsOpen : isOpen}
    >
      {children}
    </SidePanelDesktop>
  );

  const root = document.getElementById('sidebar');

  return ReactDOM.createPortal(content, root as HTMLElement);
};

export default Sidebar;
