import { IStudentEntity } from 'src/entiies/student/interface/student.entity.interface';
import { ICreateStudentDto } from '../dto/create.student.dto.interface';

export interface IStudentRepository {
  createStudent(data: ICreateStudentDto): Promise<IStudentEntity>;
  findByFio(fio: string): Promise<IStudentEntity>;
  findByEmail(email: string): Promise<IStudentEntity>;
  findOne(studentId: string): Promise<IStudentEntity>;
  addStudentToDirection(student: IStudentEntity)
  addStudentToGroup(student: IStudentEntity)
}
