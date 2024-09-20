import { Module } from '@nestjs/common';
import { ApplicationController } from 'src/presintation/controllers/application.controller';
import { ApplicationService } from 'src/use-cases/application/service/application.service';
import { ApplicationRepository } from '../db/repositories/application.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from '../db/entities/application.entity';
import { DirectionRepository } from '../db/repositories/direction.repository';
import { DirectionEntity } from '../db/entities/direction.entity';
import { GroupRepository } from '../db/repositories/group.repository';
import { GroupEntity } from '../db/entities/group.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEntity, GroupEntity, DirectionEntity])],
  controllers: [ApplicationController],
  providers: [
    {
      provide: 'applicationRepository',
      useClass: ApplicationRepository,
    },
    {
      provide: 'applicationService',
      useClass: ApplicationService,
    },
    {
        provide: 'directionRepository',
        useClass: DirectionRepository,
    },
    {
      provide: 'groupRepository',
      useClass: GroupRepository,
    }
  ],
})
export class ApplicationModule {}
