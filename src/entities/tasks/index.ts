import OpenTask from './ui/OpenTask/OpenTask';
import { type TaskStatus, type Task, AppStatus } from './model/types/Task';
import tasksReducer from './model/tasksSlice';
import CreateTaskComponent from './ui/CreateTaskComponent/CreateTaskComponent';
import { getTaskById, updateTaskById, getAllTasks, createTask } from './model/tasksApi';

export {
  tasksReducer,
  OpenTask,
  TaskStatus,
  Task,
  getTaskById,
  updateTaskById,
  getAllTasks,
  createTask,
  CreateTaskComponent,
  AppStatus
};
