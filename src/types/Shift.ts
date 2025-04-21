export interface Shift {
  id: string;
  name: string;
  group: 'Developer' | 'Admin' | 'Management';
  startTime: string;
  endTime: string;
}