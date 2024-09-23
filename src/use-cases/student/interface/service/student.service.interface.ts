import { IStudentEntity } from 'src/entiies/student/interface/student.entity.interface';
import { ICreateStudentDto } from '../dto/create.student.dto.interface';

export interface IStudentService {
  createStudent(data: ICreateStudentDto): Promise<IStudentEntity>;
  findByName(fullName: string): Promise<IStudentEntity>;
  findByEmail(email: string): Promise<IStudentEntity>;
  addStudentToDirection(studentId: string, directionId: string): Promise<void>;
}
