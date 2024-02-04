import OpenTask from './ui/OpenTask/OpenTask';
import { type Comment } from './model/types/comment';
import { type Status, type Task } from './model/types/Task';
import tasksReducer from './model/tasksSlice';
import CreateTaskComponent from './ui/CreateTaskComponent/CreateTaskComponent';
import { getTaskById, updateTaskById, getAllTasks, createTask } from './model/tasksApi';

export {
  tasksReducer,
  OpenTask,
  Comment,
  Status,
  Task,
  getTaskById,
  updateTaskById,
  getAllTasks,
  createTask,
  CreateTaskComponent,
};
