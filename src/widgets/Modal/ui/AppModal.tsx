import { type ReactNode, type FC, useState } from 'react';
import { Modal } from '@alfalab/core-components-modal';
import { createPortal } from 'react-dom';
import style from './AppModal.module.scss';

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
}

const AppModal: FC<ModalProps> = ({ children, isOpen = true }) => {
  const [isModalOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  const content = (
    <Modal open={isModalOpen} onClose={handleClose} hasCloser className={style.AppModal}>
      {children}
    </Modal>
  );

  const root = document.getElementById('sidebar');

  return createPortal(content, root as HTMLElement);
};

export default AppModal;
