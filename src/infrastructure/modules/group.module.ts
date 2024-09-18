import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from '../db/entities/group.entity';
import { GroupController } from 'src/presintation/controllers/group.controller';
import { GroupRepository } from '../db/repositories/group.repository';
import { GroupService } from 'src/use-cases/group/service/group.service';
import { DirectionRepository } from '../db/repositories/direction.repository';
import { DirectionEntity } from '../db/entities/direction.entity';
import { StudentRepository } from '../db/repositories/student.repository';
import { StudentEntity } from '../db/entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GroupEntity, DirectionEntity, StudentEntity]),
  ],
  providers: [
    {
        provide: 'groupRepository',
        useClass: GroupRepository,
    },
    {
        provide: 'groupService',
        useClass: GroupService,
    },
    {
      provide: 'directionRepository',
      useClass: DirectionRepository,
    },
    {
      provide: 'studentRepository',
      useClass: StudentRepository,
    },
  ],
  controllers: [GroupController],
})
export class GroupModule {}
