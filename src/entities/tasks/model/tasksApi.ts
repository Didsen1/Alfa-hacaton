import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Task } from './types/Task';

export const fetchTasks = createAsyncThunk<Task[]>(
  'tasks/fetchAll',
  async () => {
    try {
      const response = await fetch(`'https://dummyjson.com/http/200'`);
      return await response.json();
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);
