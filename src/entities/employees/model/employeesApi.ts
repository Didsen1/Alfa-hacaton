import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from 'utils/constants/api';
import { TOKEN_KEY } from 'entities/user';
import { type Employee } from './types/employee';

export const getAllEmployees = createAsyncThunk<Employee[]>('employees/getAllEmployees', async (_, thunkApi) => {
  try {
    const response = await axios.get<Employee[]>(`${BASE_URL}/employees`, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    });
    return response.data;
  } catch (err: any) {
    console.error(`Ошибка при запросе getAllEmployees: ${err.code}:${err.message}`);
    return thunkApi.rejectWithValue({ message: err.message, code: err.code });
  }
});

export const getEmployeeById = createAsyncThunk<Employee, number>('employees/getEmployeeById', async (id, thunkApi) => {
  try {
    const response = await axios.get<Employee>(`${BASE_URL}/employees/${id}`, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    });
    return response.data;
  } catch (err: any) {
    console.error(`Ошибка при запросе getEmployeeById: ${err.code}:${err.message}`);
    return thunkApi.rejectWithValue({ message: err.message, code: err.code });
  }
});
