import { type Employee } from "entities/employees";
import { type TaskStatus, type Task } from 'entities/tasks';

export interface Plan {
  aim_description?: string;
  expires_at?: string;
  id?: number;
  status?: TaskStatus;
  created_at?: string;
  employee?: Employee;
  tasks?: Task[];
}

