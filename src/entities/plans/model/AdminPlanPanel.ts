import { type Employee } from 'entities/employees';

export interface AdminPlan {
  plan_id?: number;
  aim?: string;
  expired_at?: string;
  employee?: Employee;
}
