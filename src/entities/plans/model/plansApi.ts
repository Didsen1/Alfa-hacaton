import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from 'utils/constants/api';
import { TOKEN_KEY } from 'entities/user';
import { type Plan } from './types/Plan';

export const getPlanById = createAsyncThunk<Plan, number>('plans/getPlanById', async (id, thunkApi) => {
  try {
    const response = await axios.get<Plan>(`${BASE_URL}/plans/${id}`, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    });
    return response.data;
  } catch (err: any) {
    console.error(`Ошибка при запросе getPlanById: ${err.code}:${err.message}`);
    return thunkApi.rejectWithValue({ message: err.message, code: err.code });
  }
});

export const updatePlanById = createAsyncThunk<Plan, [number, Partial<Plan>]>(
  'plans/updatePlanById',
  async ([id, plan], thunkApi) => {
    try {
      const response = await axios.patch<Plan>(`${BASE_URL}/plans/${id}`, plan, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        },
      });
      return response.data;
    } catch (err: any) {
      console.error(`Ошибка при запросе updatePlanById: ${err.code}:${err.message}`);
      return thunkApi.rejectWithValue({ message: err.message, code: err.code });
    }
  }
);

export const getAllPlans = createAsyncThunk<Plan[]>('plans/getAllPlans', async (_, thunkApi) => {
  try {
    const response = await axios.get<Plan[]>(`${BASE_URL}/plans`, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    });
    return response.data;
  } catch (err: any) {
    console.error(`Ошибка при запросе getAllPlans: ${err.code}:${err.message}`);
    return thunkApi.rejectWithValue({ message: err.message, code: err.code });
  }
});

export const createPlan = createAsyncThunk<Plan, Partial<Plan>>('plans/createPlan', async (plan, thunkApi) => {
  try {
    const response = await axios.post<Plan>(`${BASE_URL}/plans`, plan, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    });
    return response.data;
  } catch (err: any) {
    console.error(`Ошибка при запросе createPlan: ${err.code}:${err.message}`);
    return thunkApi.rejectWithValue({ message: err.message, code: err.code });
  }
});
