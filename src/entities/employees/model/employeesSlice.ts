import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAllEmployees } from './employeesApi';
import { type Employee } from './types/employee';

interface EmployeesState {
  employees: Employee[];
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const initialState: EmployeesState = {
  employees: [],
  isLoading: false,
  isError: false,
  error: [],
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
      state.employees = action.payload;
      state.isError = false;
    });

    builder.addCase(getAllEmployees.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload.message;
    });
  },
});

export const {} = employeesSlice.actions;

export default employeesSlice.reducer;
