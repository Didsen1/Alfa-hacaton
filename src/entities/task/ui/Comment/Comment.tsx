import { type FC } from 'react';
import { type comment } from 'entities/task/model/types/comment';
import ChainIcon from 'shared/icons/chain-icon.svg?react';
import DocumentIcon from 'shared/icons/document-icon.svg?react';
import style from './Comment.module.scss';

interface CommentProps extends comment {}

const Comment: FC<CommentProps> = ({ author, body, created_at, type, link }) => {
  console.log(type);
  return (
    <div className={style.Comment}>
      {type === 'text' && <span className={[style.text, style.body].join(' ')}>{body}</span>}

      {type === 'link' && (
        <div className={style.linkWrapper}>
          <ChainIcon />
          <a href={link} target="_blank" rel="noreferrer" className={[style.link, style.body].join(' ')}>
            {body}
          </a>
        </div>
      )}

      {type === 'file' && (
        <div className={style.linkWrapper}>
          <DocumentIcon />
          <a href={link} target="_blank" rel="noreferrer" className={[style.file, style.body].join(' ')}>
            {body}
          </a>
        </div>
      )}

      <div className={style.authorWrapper}>
        <span>{author}</span>
        <span>{created_at}</span>
      </div>
    </div>
  );
};

export default Comment;
