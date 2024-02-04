import { type Employee } from "entities/employees/model/types/employee";

export interface Comment {
  type: string;
  content: string;
  id: number;
  author: Employee;
  created_at: string;
}
