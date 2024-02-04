import { type employee } from "entities/plan/model/Employee";

export interface AdminPlan {
  plan_id?: number;
  aim? : string;
  expired_at: string;
  employee: employee;
}

