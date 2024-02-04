import { type FC } from 'react';
import ChainIcon from 'shared/icons/chain-icon.svg?react';
import DocumentIcon from 'shared/icons/document-icon.svg?react';
import { type Comment as TComment } from '../../model/types/Comment';
import style from './Comment.module.scss';

interface CommentProps extends TComment {}

const Comment: FC<CommentProps> = ({ author, content, created_at, type }) => {
  console.log(type);
  return (
    <div className={style.Comment}>
      {type === 'text' && <span className={[style.text, style.content].join(' ')}>{content}</span>}

      {type === 'link' && (
        <div className={style.linkWrapper}>
          <ChainIcon />
          <a href={content.link} target="_blank" rel="noreferrer" className={[style.link, style.content].join(' ')}>
            {content}
          </a>
        </div>
      )}

      {type === 'file' && (
        <div className={style.linkWrapper}>
          <DocumentIcon />
          <a href={content.link} target="_blank" rel="noreferrer" className={[style.file, style.content].join(' ')}>
            {content}
          </a>
        </div>
      )}

      <div className={style.authorWrapper}>
        <span>{author.full_name}</span>
        <span>{created_at}</span>
      </div>
    </div>
  );
};

export default Comment;
