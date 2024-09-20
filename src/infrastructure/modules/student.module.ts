import { Module } from '@nestjs/common';
import { StudentController } from 'src/presintation/controllers/student.controller';
import { StudentService } from 'src/use-cases/student/service/student.service';
import { StudentRepository } from '../db/repositories/student.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from '../db/entities/student.entity';
import { DirectionRepository } from '../db/repositories/direction.repository';
import { DirectionEntity } from '../db/entities/direction.entity';


@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity, DirectionEntity])],
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
        provide: 'directionRepository',
        useClass: DirectionRepository,
    },
  ],
})
export class StudentModule {}
