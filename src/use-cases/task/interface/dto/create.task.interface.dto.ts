export interface ICreateTaskDto {
  id?: string;
  title: string;
  description: string;
  stage: string;
  createdAt: string | null;
  endDate: string | null;
}
