import { Module } from '@nestjs/common';
import { ApplicationController } from 'src/presintation/controllers/application.controller';
import { ApplicationService } from 'src/use-cases/application/service/application.service';
import { ApplicationRepository } from '../db/repositories/application.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from '../db/entities/application.entity';
import { SpecialtyRepository } from '../db/repositories/specialty.repository';
import { SpecialtyEntity } from '../db/entities/specialty.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEntity, SpecialtyEntity])],
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
        provide: 'SpecialtyRepository',
        useClass: SpecialtyRepository,
    },
  ],
})
export class ApplicationModule {}
