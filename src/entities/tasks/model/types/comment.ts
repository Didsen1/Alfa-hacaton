import { type Employee } from "entities/employees/model/types/employee";

export interface Comment {
  type: string;
  content: any;
  id: number;
  author: Employee;
  created_at: string;
}
