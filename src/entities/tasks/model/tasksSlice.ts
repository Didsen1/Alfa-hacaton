import { createSlice } from '@reduxjs/toolkit';
import { type Task } from './types/Task';
import { fetchTasks } from './tasksApi';

// Define a type for the slice state
interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  isError: boolean;
  error: unknown[];
}

// Define the initial state using that type
const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  isError: false,
  error: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload;
      state.isError = false;
    });

    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error.push(action.payload);
    });
  },
});

export const {} = tasksSlice.actions;

export default tasksSlice.reducer;
