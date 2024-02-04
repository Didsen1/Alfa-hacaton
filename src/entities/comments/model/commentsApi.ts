import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from 'utils/constants/api';
import { TOKEN_KEY } from 'entities/user';
import { type Comment } from './types/Comment';

export const getTasksComments = createAsyncThunk<Comment[], number>(
  'comments/getTasksComments',
  async (task_id, thunkAPI) => {
    try {
      const response = await axios.get<Comment[]>(`${BASE_URL}/tasks/${task_id}/comments`, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        },
      });
      return response.data;
    } catch (err: any) {
      console.error(`Ошибка при запросе getTasksComments: ${err.code}:${err.message}`);
      return thunkAPI.rejectWithValue({ message: err.message, code: err.code });
    }
  }
);

export const createComment = createAsyncThunk<null, [number, Partial<Comment>]>(
  'comments/createComment',
  async ([task_id, comment], thunkAPI) => {
    try {
      const response = await axios.post<null>(`${BASE_URL}/tasks/${task_id}/comments`, comment, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        },
      });
      return response.data;
    } catch (err: any) {
      console.error(`Ошибка при запросе createComment: ${err.code}:${err.message}`);
      return thunkAPI.rejectWithValue({ message: err.message, code: err.code });
    }
  }
);

export const uploadFile = createAsyncThunk<string, [number, File]>(
  'comments/uploadFile',
  async ([task_id, file], thunkAPI) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<string>(`${BASE_URL}/tasks/${task_id}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        },
      });

      createComment([task_id, { type: 'file', content: response.data }]);
      return response.data;
    } catch (err: any) {
      console.error(`Ошибка при запросе uploadFile: ${err.code}:${err.message}`);
      return thunkAPI.rejectWithValue({ message: err.message, code: err.code });
    }
  }
);

export const getUnreadCommentsCount = createAsyncThunk<number>('comments/getUnreadCommentsCount', async (_, thunkAPI) => {
  try {
    const response = await axios.get<number>(`${BASE_URL}/comments/unread`, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    });
    return response.data;
  } catch (err: any) {
    console.error(`Ошибка при запросе getUnreadCommentsCount: ${err.code}:${err.message}`);
    return thunkAPI.rejectWithValue({ message: err.message, code: err.code });
  }
});
