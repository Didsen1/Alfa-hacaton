import { type FC, useState } from 'react';
import AppModal from 'widgets/Modal';
import { PaperclipMIcon } from '@alfalab/icons-glyph/PaperclipMIcon';
import style from './CommentInput.module.scss';
import PinFile from '../PinFile/PinFile';

interface CommentInputProps {}

const CommentInput: FC<CommentInputProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={style.CommentInput}>
        <input type="text" placeholder="Комметарий" />
        <button aria-label="attach-button" onClick={handleButtonClick} type="button">
          <PaperclipMIcon />
        </button>
      </div>
      <AppModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <PinFile />
      </AppModal>
    </>
  );
};

export default CommentInput;
