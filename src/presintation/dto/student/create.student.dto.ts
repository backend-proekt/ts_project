import { ICreateStudentDto } from 'src/use-cases/student/interface/dto/create.student.dto.interface';

export class CreateStudentDto implements ICreateStudentDto {
  id?: string;
  fio: string;
  date: string;
  parents_fio: string;
  phone_number: string;
  email: string;
  directionId: string;
  groupId: string;
}
