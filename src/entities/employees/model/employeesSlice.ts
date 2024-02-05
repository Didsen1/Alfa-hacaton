import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type AppError } from 'utils/types/AppError';
import { getAllEmployees, getEmployeeById } from './employeesApi';
import { type Employee } from './types/employee';

interface EmployeesState {
  employees: Employee[];
  currentEmployee?: Employee;
  isLoading: boolean;
  isError: boolean;
  error: AppError;
}

const initialState: EmployeesState = {
  employees: [],
  currentEmployee: undefined,
  isLoading: false,
  isError: false,
  error: { message: '', code: 0 },
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmployees.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.employees = action.payload;
    });
    builder.addCase(getAllEmployees.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(getEmployeeById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEmployeeById.fulfilled, (state, action: PayloadAction<Employee>) => {
      state.isLoading = false;
      state.isError = false;
      state.currentEmployee = action.payload;
    });
    builder.addCase(getEmployeeById.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });
  },
});

export const {} = employeesSlice.actions;

export default employeesSlice.reducer;
