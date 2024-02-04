import { type Comment } from './Comment';

export interface Task {
  name: string;
  description: string;
  status: Status;
  created_at: string;
  expires_at: string;
  id: string;
  comments: Comment[];
}

export type Status = 'Создано' | 'В работе' | 'На проверке' | 'Выполнено' | 'Не выполнено';
