import { useState, type FC, type ChangeEvent, useEffect, type FormEvent, type MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { PaperclipMIcon } from '@alfalab/icons-glyph/PaperclipMIcon';
import { IconButton } from '@alfalab/core-components-icon-button';
import { PaperAirplaneMIcon } from '@alfalab/icons-glyph/PaperAirplaneMIcon';
import AppModal from 'widgets/Modal';
import { createComment, getTasksComments } from 'entities/comments';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { BASE_URL } from 'utils/constants/api';
import style from './CommentInput.module.scss';
import PinFile from '../PinFile/PinFile';
import { clearFileLink } from '../../model/commentsSlice';

const isValidURL = (url: string) => {
  const pattern = /^https?:\/\//;
  return pattern.test(url);
};

const CommentInput: FC = () => {
  const { task_id } = useParams();
  const { fileLink, comments } = useAppSelector((state) => state.comments);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const normalizeTaskId = Number(task_id);

  useEffect(() => {
    if (fileLink) {
      dispatch(createComment([normalizeTaskId, { type: 'file', content: `${BASE_URL}${fileLink}` }]));
      dispatch(getTasksComments(normalizeTaskId));
      dispatch(clearFileLink());
      setIsModalOpen(false);
    }
  }, [dispatch, fileLink, normalizeTaskId]);

  useEffect(() => {
    if (!inputValue) {
      dispatch(getTasksComments(normalizeTaskId));
    }
  }, [dispatch, inputValue, normalizeTaskId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const sendComment = (event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isValidURL(inputValue)) {
      dispatch(createComment([normalizeTaskId, { type: 'link', content: { text: inputValue, url: inputValue } }]));
    } else {
      dispatch(createComment([normalizeTaskId, { type: 'text', content: inputValue }]));
    }
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          sendComment(e);
          setInputValue('');
        }}
        className={style.commentInputWrapper}
      >
        <div className={style.CommentInput}>
          <input type="text" value={inputValue} onChange={handleChange} placeholder="Комметарий" />
          <button onClick={openModal} aria-label="attach-button" type="button">
            <PaperclipMIcon />
          </button>
        </div>
        <IconButton
          className={style.sendButton}
          name="commentButton"
          onClick={(e) => {
            sendComment(e);
            setInputValue('');
          }}
          type="submit"
          icon={PaperAirplaneMIcon}
        />
      </form>
      <AppModal setIsOpen={setIsModalOpen} isOpen={isModalOpen}>
        <PinFile />
      </AppModal>
    </>
  );
};

export default CommentInput;
