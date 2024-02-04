import EmployeeList from './ui/EmployeeList/EmployeeList';
import employeeReducer from './model/employeesSlice';
import { getAllEmployees, getEmployeeById } from './model/employeesApi';
import { type Employee } from './model/types/employee';

export { EmployeeList, employeeReducer, getAllEmployees, getEmployeeById };

export type { Employee };
