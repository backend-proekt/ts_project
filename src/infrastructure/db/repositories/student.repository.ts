import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateStudentDto } from 'src/use-cases/student/interface/dto/create.student.dto.interface';
import { IStudentRepository } from 'src/use-cases/student/interface/repository/student.repository.interface';
import { StudentEntity } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { IStudentEntity } from 'src/entiies/student/interface/student.entity.interface';

@Injectable()
export class StudentRepository implements IStudentRepository {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async createStudent(data: ICreateStudentDto): Promise<IStudentEntity> {
    try {
      const student = this.studentRepository.create(data);
      return await this.studentRepository.save(student);
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string): Promise<IStudentEntity> {
    try {
      return this.studentRepository.findOneBy({ id });
    } catch (error) {
      throw new Error('Student not found');
    }
  }

  findByEmail(email: string): Promise<IStudentEntity> {
    try {
      return this.studentRepository.findOneBy({ email });
    } catch (error) {
      throw new Error('Student not found');
    }
  }

  findByFio(fio: string): Promise<IStudentEntity> {
    try {
      return this.studentRepository.findOneBy({ fio });
    } catch (error) {
      throw new Error('Student not found');
    }
  }

  async findOne(studentId: string): Promise<IStudentEntity> {
    try {
      return this.studentRepository.findOne({ where: { id: studentId } });
    } catch (error) {
      throw new Error('Student not found');
    }
  }

  async addStudentToDirection(student: IStudentEntity) {
    try {
      return await this.studentRepository.save(student);
    } catch (error) {
      throw new Error(error);
    }
  }

  async addStudentToGroup(student: IStudentEntity) {
    try {
      return await this.studentRepository.save(student);
    } catch (error) {
      throw new Error(error);
    }
  }
}
