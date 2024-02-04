import { type employee } from "./Employee"

export interface AdminPlan {
  plan_id?: number;
  aim? : string;
  expired_at: string;
  employee: employee;
}

