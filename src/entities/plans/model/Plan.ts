import { type Employee } from "entities/employees/model/types/employee";

export interface Plan {
  plan_id?: number;
  aim? : string;
  expired_at: string;
  status: status;
  employee: Employee;
}

export type status = 'Создано' | 'В работе' | 'На проверке' | 'Выполнено' | 'Не выполнено';
