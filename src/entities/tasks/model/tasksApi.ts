import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from 'utils/constants/api';
import { TOKEN_KEY } from 'entities/user';
import { type Task } from './types/Task';

export const getTaskById = createAsyncThunk<Task, number>('tasks/getTaskById', async (id, thunkApi) => {
  try {
    const response = await axios.get<Task>(`${BASE_URL}/api/v1/tasks/${id}`, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    });
    return response.data;
  } catch (err: any) {
    console.error(`Ошибка при запросе getTaskById: ${err.code}:${err.message}`);
    return thunkApi.rejectWithValue({ message: err.message, code: err.code });
  }
});

export const updateTaskById = createAsyncThunk<Task, [number, Partial<Task>]>(
  'tasks/updateTaskById',
  async ([id, task], thunkApi) => {
    try {
      const response = await axios.patch<Task>(`${BASE_URL}/api/v1/tasks/${id}/`, task, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        },
      });
      return response.data;
    } catch (err: any) {
      console.error(`Ошибка при запросе updateTaskById: ${err.code}:${err.message}`);
      return thunkApi.rejectWithValue({ message: err.message, code: err.code });
    }
  }
);

export const getAllTasks = createAsyncThunk<Task[], number>('tasks/getAllTasks', async (plan_id, thunkApi) => {
  try {
    const response = await axios.get<Task[]>(`${BASE_URL}/api/v1/plans/${plan_id}/tasks/`, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    });
    return response.data;
  } catch (err: any) {
    console.error(`Ошибка при запросе getAllTasks: ${err.code}:${err.message}`);
    return thunkApi.rejectWithValue({ message: err.message, code: err.code });
  }
});

export const createTask = createAsyncThunk<Task, [number, Partial<Task>]>(
  'tasks/createTask',
  async ([plan_id, task], thunkApi) => {
    try {
      const response = await axios.post<Task>(`${BASE_URL}/api/v1/plans/${plan_id}/tasks/`, task, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        },
      });
      return response.data;
    } catch (err: any) {
      console.error(`Ошибка при запросе createTask: ${err.code}:${err.message}`);
      return thunkApi.rejectWithValue({ message: err.message, code: err.code });
    }
  }
);
