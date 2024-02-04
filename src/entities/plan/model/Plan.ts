import { type employee } from "./Employee"

export interface Plan {
  plan_id?: number;
  aim? : string;
  expired_at: string;
  status: status;
  employee: employee;
}

export type status = 'Создано' | 'В работе' | 'На проверке' | 'Выполнено' | 'Не выполнено';
