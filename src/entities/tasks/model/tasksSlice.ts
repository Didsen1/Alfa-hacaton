import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type AppError } from 'utils/types/AppError';
import { type Task } from './types/Task';
import { createTask, getAllTasks, getTaskById, updateTaskById } from './tasksApi';

interface TasksState {
  tasks: Task[];
  currentTask?: Task;
  isLoading: boolean;
  isError: boolean;
  error: AppError;
}

const initialState: TasksState = {
  tasks: [],
  currentTask: undefined,
  isLoading: false,
  isError: false,
  error: { message: '', code: 0 },
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTaskById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTaskById.fulfilled, (state, action: PayloadAction<Task>) => {
      state.isLoading = false;
      state.isError = false;
      state.currentTask = action.payload;
    });
    builder.addCase(getTaskById.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(updateTaskById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTaskById.fulfilled, (state, action: PayloadAction<Task>) => {
      state.isLoading = false;
      state.isError = false;
      state.tasks = state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task));
    });
    builder.addCase(updateTaskById.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(getAllTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.tasks = action.payload;
    });
    builder.addCase(getAllTasks.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(createTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTask.fulfilled, (state, action: PayloadAction<Task>) => {
      state.isLoading = false;
      state.isError = false;

      const currentTasks = state.tasks;
      currentTasks.unshift(action.payload);
      state.tasks = currentTasks;
    });
    builder.addCase(createTask.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });
  },
});

export const {} = tasksSlice.actions;

export default tasksSlice.reducer;
