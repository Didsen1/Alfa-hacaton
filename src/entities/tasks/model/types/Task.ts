import { type comment } from './comment';

export interface Task {
  task_id: string;
  name: string;
  description: string;
  created_at: string;
  expires_at: string;
  status: status;
  comments: comment[];
}

export type status = 'Создано' | 'В работе' | 'На проверке' | 'Выполнено' | 'Не выполнено';
