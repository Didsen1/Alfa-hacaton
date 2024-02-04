import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type AppError } from 'utils/types/AppError';
import { type Comment } from './types/Comment';
import { createComment, getTasksComments, getUnreadCommentsCount, uploadFile } from './commentsApi';

interface CommentsState {
  comments: Comment[];
  unreadCount?: number;
  currentComment?: Comment;
  isLoading: boolean;
  isError: boolean;
  error: AppError;
}

const initialState: CommentsState = {
  comments: [],
  currentComment: undefined,
  isLoading: false,
  isError: false,
  error: { message: '', code: 0 },
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasksComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTasksComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.comments = action.payload;
    });
    builder.addCase(getTasksComments.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(createComment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createComment.fulfilled, (state, action: PayloadAction<Comment>) => {
      state.isLoading = false;
      state.isError = false;

      const currentComments = state.comments;
      currentComments.unshift(action.payload);
      state.comments = currentComments;
    });
    builder.addCase(createComment.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(uploadFile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadFile.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(uploadFile.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(getUnreadCommentsCount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUnreadCommentsCount.fulfilled, (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      state.isError = false;
      state.unreadCount = action.payload;
    });
    builder.addCase(getUnreadCommentsCount.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });
  },
});

export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
