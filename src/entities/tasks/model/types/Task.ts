import { type Comment } from 'entities/comments';

export interface Task {
  name: string;
  description: string;
  status: TaskStatus;
  created_at: string;
  expires_at: string;
  id: string;
  comments: Comment[];
}

export type TaskStatus = 'created' | 'in_progress' | 'done' | 'failed' | 'under_review';

export enum AppStatus {
  'created' = 'Создано',
  'in_progress' = 'В работе',
  'done' = 'Выполнено',
  'failed' = 'Не выполнено',
  'under_review' = 'На проверке',
}

