import OpenTask from './ui/OpenTask/OpenTask';
import { type comment } from './model/types/comment';
import { type status } from './model/types/Task';
import tasksReducer from './model/tasksSlice';
import PinFile from './ui/PinFile/PinFile';
import CreateTask from './ui/CreateTask/CreateTask';

export { tasksReducer, OpenTask, comment, status, PinFile, CreateTask };
