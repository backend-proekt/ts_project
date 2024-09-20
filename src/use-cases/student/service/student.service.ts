import { Inject, Injectable } from '@nestjs/common';
import { IStudentService } from '../interface/service/student.service.interface';
import { IStudentRepository } from '../interface/repository/student.repository.interface';
import { IStudentEntity } from 'src/entiies/student/interface/student.entity.interface';
import { ICreateStudentDto } from '../interface/dto/create.student.dto.interface';
import { IDirectionRepository } from 'src/use-cases/direction/interface/repository/direction.repository.interface';

@Injectable()
export class StudentService implements IStudentService {
  constructor(
    @Inject('studentRepository')
    private readonly studentRepository: IStudentRepository,
    @Inject('directionRepository')
    private readonly directionRepository: IDirectionRepository,
  ) {}

  async createStudent(data: ICreateStudentDto): Promise<IStudentEntity> {

    return this.studentRepository.createStudent({
      fio: data.fio,
      date: data.date,
      parents_fio: data.parents_fio,
      phone_number: data.phone_number,
      email: data.email,
    });
  }

  async findByEmail(email: string): Promise<IStudentEntity> {
    return await this.studentRepository.findByEmail(email);
  }

  async findByFio(fio: string): Promise<IStudentEntity> {
    return await this.studentRepository.findByFio(fio);
  }

  async addStudentToDirection(studentId: string, directionId: string): Promise<void> {
    const student = await this.studentRepository.findOne(studentId);
    const direction = await this.directionRepository.findOne(directionId);

    if (!student || !direction) {
      throw new Error('Student or Direction not found');
    }
  }
}
