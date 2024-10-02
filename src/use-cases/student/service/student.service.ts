import { Inject, Injectable } from '@nestjs/common';
import { IStudentService } from '../interface/service/student.service.interface';
import { IStudentRepository } from '../interface/repository/student.repository.interface';
import { IStudentEntity } from 'src/entiies/student/interface/student.entity.interface';
import { ICreateStudentDto } from '../interface/dto/create.student.dto.interface';
import { ISpecialtyRepository } from 'src/use-cases/specialty/interface/repository/specialty.repository.interface';

@Injectable()
export class StudentService implements IStudentService {
  constructor(
    @Inject('studentRepository')
    private readonly studentRepository: IStudentRepository,
    @Inject('SpecialtyRepository')
    private readonly SpecialtyRepository: ISpecialtyRepository,
  ) {}

  async createStudent(data: ICreateStudentDto): Promise<IStudentEntity> {

    return this.studentRepository.createStudent({
      typeOfLearning: data.typeOfLearning,
      fullName: data.fullName,
      age: data.age,
      city: data.city,
      specialty: data.specialty,
      parentsName: data.parentsName,
      phone: data.phone,
      email: data.email,
      url: data.url,
    });
  }

  async findByEmail(email: string): Promise<IStudentEntity> {
    return await this.studentRepository.findByEmail(email);
  }

  async findByName(fullName: string): Promise<IStudentEntity> {
    return await this.studentRepository.findByName(fullName);
  }
}
