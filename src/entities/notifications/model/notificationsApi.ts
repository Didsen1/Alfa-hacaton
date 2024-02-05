import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from 'utils/constants/api';
import { TOKEN_KEY } from 'entities/user';
import { type Notification } from './types/notification';

export const getAllNotifications = createAsyncThunk<Notification[]>(
  'notifications/getAllNotifications',
  async (_, thunkApi) => {
    try {
      const response = await axios.patch<Notification[]>(`${BASE_URL}/api/v1/notifications`, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        },
      });
      return response.data;
    } catch (err: any) {
      console.error(`Ошибка при запросе getAllNotifications: ${err.code}:${err.message}`);
      return thunkApi.rejectWithValue({ message: err.message, code: err.code });
    }
  }
);

export const setNotificationsAsReadByIds = createAsyncThunk<null, number[]>(
  'notifications/setNotificationsAsReadByIds',
  async (ids, thunkApi) => {
    try {
      const response = await axios.patch<null>(`${BASE_URL}/api/v1/notifications/read`, ids, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        },
      });
      return response.data;
    } catch (err: any) {
      console.error(`Ошибка при запросе setNotificationsAsReadByIds: ${err.code}:${err.message}`);
      return thunkApi.rejectWithValue({ message: err.message, code: err.code });
    }
  }
);
