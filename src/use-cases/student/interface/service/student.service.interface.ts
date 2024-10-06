import { IStudentEntity } from 'src/entiies/student/interface/student.entity.interface';
import { ICreateStudentDto } from '../dto/create.student.dto.interface';

export interface IStudentService {
  createStudent(data: ICreateStudentDto): Promise<IStudentEntity>;
  findAllStudents(): Promise<IStudentEntity[]>;
  //deleteStudent(id: string): Promise<IStudentEntity[]>;
  findById(id: string): Promise<IStudentEntity>;
  findByEmail(email: string): Promise<IStudentEntity>;
  findByName(fullName: string): Promise<IStudentEntity>;
}
