import OpenTask from './ui/OpenTask/OpenTask';
import { type comment } from './model/types/comment';
import { type status } from './model/types/Task';
import tasksReducer from './model/tasksSlice';
import PinFileModal from './ui/PinFileModal/PinFileModal';
import CreateTask from './ui/CreateTask/CreateTask';

export { tasksReducer, OpenTask, comment, status, PinFileModal, CreateTask };
