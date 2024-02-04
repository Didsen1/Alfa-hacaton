import { type ReactNode, type FC, type Dispatch, type SetStateAction, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '@alfalab/core-components-modal';
import style from './AppModal.module.scss';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AppModal: FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const content = (
    <Modal open={isOpen} onClose={onClose} hasCloser className={style.AppModal}>
      {children}
    </Modal>
  );

  const root = document.getElementById('sidebar');

  return createPortal(content, root as HTMLElement);
};

export default AppModal;
