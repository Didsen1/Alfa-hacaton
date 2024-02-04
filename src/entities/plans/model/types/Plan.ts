import { type Employee } from "entities/employees";
import { type Status, type Task } from 'entities/tasks';

export interface Plan {
  aim_description: string;
  expired_at: string;
  id: number;
  status: Status;
  created_at: string;
  employee: Employee;
  tasks: Task[];
}

