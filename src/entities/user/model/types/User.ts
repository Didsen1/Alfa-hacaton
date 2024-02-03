export interface User {
  type: 'superior' | 'employee' | 'unset' | undefined;
  fullName: string;
  avatar: string;
}