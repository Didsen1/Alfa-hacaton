export interface Notification {
  type: 'success' | 'fail' | 'common';
  header: string;
  content: string;
  is_read: boolean;
  id: number;
  task_id: number;
  created_at: string;
}
