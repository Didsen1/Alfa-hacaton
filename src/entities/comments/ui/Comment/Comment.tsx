import { type FC } from 'react';
import ChainIcon from 'shared/icons/chain-icon.svg?react';
import DocumentIcon from 'shared/icons/document-icon.svg?react';
import { type Comment as TComment } from 'entities/comments';
import style from './Comment.module.scss';

interface CommentProps extends TComment {}

const Comment: FC<CommentProps> = ({ author, content, created_at, type }) => {
  let a;
  return (
    <div className={style.Comment}>
      {type === 'text' && <span className={[style.text, style.content].join(' ')}>{content as string}</span>}

      {type === 'link' && (
        <div className={style.linkWrapper}>
          <ChainIcon />
          {/* @ts-ignore */}
          <a href={content.url} target="_blank" rel="noreferrer" className={[style.link, style.content].join(' ')}>
            {/* @ts-ignore */}
            {content.text}
          </a>
        </div>
      )}

      {type === 'file' && (
        <div className={style.linkWrapper}>
          <DocumentIcon />
          {/* @ts-ignore */}
          <a href={content} target="_blank" rel="noreferrer" className={[style.file, style.content].join(' ')}>
            {/* @ts-ignore */}
            {content}
          </a>
        </div>
      )}

      <div className={style.authorWrapper}>
        <span>{author?.full_name}</span>
        <span>{new Date(created_at).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Comment;
