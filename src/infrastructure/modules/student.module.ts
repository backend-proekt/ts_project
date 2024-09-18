import { Module } from '@nestjs/common';
import { StudentController } from 'src/presintation/controllers/student.controller';
import { StudentService } from 'src/use-cases/student/service/student.service';
import { StudentRepository } from '../db/repositories/student.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from '../db/entities/student.entity';
import { DirectionRepository } from '../db/repositories/direction.repository';
import { DirectionEntity } from '../db/entities/direction.entity';
import { GroupRepository } from '../db/repositories/group.repository';
import { GroupEntity } from '../db/entities/group.entity';


@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity, DirectionEntity, GroupEntity])],
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
    {
        provide: 'groupRepository',
        useClass: GroupRepository,
    },
  ],
})
export class StudentModule {}
