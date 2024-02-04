import { type Employee } from 'entities/employees';

export interface Comment {
  type: string;
  content: string;
  id: number;
  author: Employee;
  created_at: string;
}
