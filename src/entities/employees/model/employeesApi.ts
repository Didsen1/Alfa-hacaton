import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type Employee } from './types/employee';

export const getAllEmployees = createAsyncThunk<Employee[]>('quotes/fetchWithLimit', async () => {
  try {
    const response = await axios.get<Employee[]>('http://51.250.6.208/api/v1/employees', {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Authorization: 'Bearer 1234567890abcdefghijklmnopqrstuvwxyz',
      },
    });
    return response.data;
  } catch (err: any) {
    console.error(`Ошибка при запросе getAllEmployees: ${err.code}:${err.message}`);
    return { message: err.message, code: err.code } as any;
  }
});
