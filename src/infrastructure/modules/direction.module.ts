import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectionEntity } from '../db/entities/direction.entity';
import { DirectionController } from 'src/presintation/controllers/direction.controller';
import { DirectionRepository } from '../db/repositories/direction.repository';
import { DirectionService } from 'src/use-cases/direction/service/direction.service';
import { GroupRepository } from '../db/repositories/group.repository';
import { GroupEntity } from '../db/entities/group.entity';
import { StudentRepository } from '../db/repositories/student.repository';
import { StudentEntity } from '../db/entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DirectionEntity, GroupEntity, StudentEntity]),
  ],
  providers: [
    {
        provide: 'directionRepository',
        useClass: DirectionRepository,
    },
    {
        provide: 'directionService',
        useClass: DirectionService,
    },
    {
      provide: 'groupRepository',
      useClass: GroupRepository,
  },
    {
      provide: 'studentRepository',
      useClass: StudentRepository,
    },
  ],
  controllers: [DirectionController],
})
export class DirectionModule {}
