import { Module } from '@nestjs/common';
import { StudentController } from 'src/presintation/controllers/student.controller';
import { StudentService } from 'src/use-cases/student/service/student.service';
import { StudentRepository } from '../db/repositories/student.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from '../db/entities/student.entity';
import { SpecialtyRepository } from '../db/repositories/specialty.repository';
import { SpecialtyEntity } from '../db/entities/specialty.entity';


@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity, SpecialtyEntity])],
  controllers: [StudentController],
  providers: [
    {
      provide: 'studentRepository',
      useClass: StudentRepository,
    },
    {
      provide: 'studentService',
      useClass: StudentService,
    },
    {
        provide: 'SpecialtyRepository',
        useClass: SpecialtyRepository,
    },
  ],
})
export class StudentModule {}
