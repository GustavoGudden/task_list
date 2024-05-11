export interface TaskModel {
  title: string;
  description: string;
  status: 'OPEN' | 'ARCHIVED' | 'CLOSE';
  initialDate: Date | null;
  endDate: Date | null;
}
