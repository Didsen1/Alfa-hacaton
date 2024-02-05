import commentsReducer from './model/commentsSlice';
import { getTasksComments, createComment, uploadFile, getUnreadCommentsCount } from './model/commentsApi';
import CommentComponent from './ui/Comment/Comment';
import { type Comment } from './model/types/Comment';
import CommentInput from './ui/CommentInput/CommentInput';

export {
  commentsReducer,
  getTasksComments,
  createComment,
  uploadFile,
  getUnreadCommentsCount,
  Comment,
  CommentComponent,
  CommentInput,
};
