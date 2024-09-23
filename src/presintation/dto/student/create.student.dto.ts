import { ICreateStudentDto } from 'src/use-cases/student/interface/dto/create.student.dto.interface';

export class CreateStudentDto implements ICreateStudentDto {
  id?: string;
  typeOfLearning: string;
  fullName: string;
  age: string;
  city: string;
  specialty: string;
  parentsName: string;
  phone: string;
  email: string;
  url: string;
}
