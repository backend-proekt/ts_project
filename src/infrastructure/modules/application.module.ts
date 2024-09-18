import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationController } from 'src/presintation/controllers/application.controller';
import { ApplicationService } from 'src/use-cases/application/service/application.service';
import { ApplicationRepository } from '../db/repositories/application.repository';
import { ApplicationEntity } from '../db/entities/application.entity';
import { DirectionRepository } from '../db/repositories/direction.repository';
import { DirectionEntity } from '../db/entities/direction.entity';



@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEntity, DirectionEntity])],
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
  ],
})
export class ApplicationModule {}
