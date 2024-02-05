import { type Employee } from 'entities/employees';

export interface Comment {
  type: 'text' | 'file' | 'link';
  content: string | LinkContent;
  id: number;
  author: Employee;
  created_at: string;
}

export type LinkContent = {
  url: string;
  text: string;
};
