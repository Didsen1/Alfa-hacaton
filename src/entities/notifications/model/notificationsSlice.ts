import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type AppError } from 'utils/types/AppError';
import { type Notification } from './types/notification';
import { getAllNotifications, setNotificationsAsReadByIds } from './notificationsApi';

interface NotificationState {
  notifications: Notification[];
  isLoading: boolean;
  isError: boolean;
  error: AppError;
}

const initialState: NotificationState = {
  notifications: [],
  isLoading: false,
  isError: false,
  error: { message: '', code: 0 },
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setNotificationsAsReadByIds.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setNotificationsAsReadByIds.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(setNotificationsAsReadByIds.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(getAllNotifications.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllNotifications.fulfilled, (state, action: PayloadAction<Notification[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.notifications = action.payload;
    });
    builder.addCase(getAllNotifications.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });
  },
});

export const {} = notificationsSlice.actions;

export default notificationsSlice.reducer;
