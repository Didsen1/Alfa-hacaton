import { useState, type FC, type ChangeEvent, useEffect, type FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { PaperclipMIcon } from '@alfalab/icons-glyph/PaperclipMIcon';
import { IconButton } from '@alfalab/core-components-icon-button';
import { PaperAirplaneMIcon } from '@alfalab/icons-glyph/PaperAirplaneMIcon';
import AppModal from 'widgets/Modal';
import { createComment, getTasksComments } from 'entities/comments';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import style from './CommentInput.module.scss';
import PinFile from '../PinFile/PinFile';
import { clearFileLink } from '../../model/commentsSlice';

const isValidURL = (url: string) => {
  const pattern = /^https?:\/\//;
  return pattern.test(url);
};

const CommentInput: FC = () => {
  const { task_id } = useParams();
  const { fileLink } = useAppSelector((state) => state.comments);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const normalizeTaskId = Number(task_id);

  useEffect(() => {
    if (fileLink) {
      dispatch(createComment([normalizeTaskId, { type: 'file', content: `http://51.250.6.208/${fileLink}` }]));
      dispatch(getTasksComments(normalizeTaskId));
      dispatch(clearFileLink());
      setIsModalOpen(false);
    }
  }, [dispatch, fileLink, normalizeTaskId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const sendComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidURL(inputValue)) {
      dispatch(createComment([normalizeTaskId, { type: 'link', content: { text: inputValue, url: inputValue } }]));
    } else {
      dispatch(createComment([normalizeTaskId, { type: 'text', content: inputValue }]));
    }
    dispatch(getTasksComments(normalizeTaskId));
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form onSubmit={sendComment} className={style.commentInputWrapper}>
        <div className={style.CommentInput}>
          <input type="text" value={inputValue} onChange={handleChange} placeholder="Комметарий" />
          <button onClick={openModal} aria-label="attach-button" type="button">
            <PaperclipMIcon />
          </button>
        </div>
        <IconButton className={style.sendButton} type="submit" icon={PaperAirplaneMIcon} />
      </form>
      <AppModal setIsOpen={setIsModalOpen} isOpen={isModalOpen}>
        <PinFile />
      </AppModal>
    </>
  );
};

export default CommentInput;
