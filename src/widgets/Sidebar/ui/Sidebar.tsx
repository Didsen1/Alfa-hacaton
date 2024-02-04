import { useState, type FC, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { SidePanelDesktop } from '@alfalab/core-components-side-panel/desktop';
import style from './Sidebar.module.scss';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const content = (
    <SidePanelDesktop
      onClose={handleClose}
      nativeScrollbar={false}
      hasCloser
      className={style.Sidebar}
      open={isOpen}
    >
      {children}
    </SidePanelDesktop>
  );

  const root = document.getElementById('sidebar');

  return ReactDOM.createPortal(content, root as HTMLElement);
};

export default Sidebar;
