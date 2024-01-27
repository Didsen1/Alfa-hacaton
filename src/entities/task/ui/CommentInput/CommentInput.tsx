import { type FC } from 'react';
import { PaperclipMIcon } from '@alfalab/icons-glyph/PaperclipMIcon';
import style from './CommentInput.module.scss';

interface CommentInputProps {}

const CommentInput: FC<CommentInputProps> = () => (
  <div className={style.CommentInput}>
    <input type="text" placeholder="Комметарий" />
    <button aria-label='attach-button' type="button">
      <PaperclipMIcon />
    </button>
  </div>
);

export default CommentInput;
