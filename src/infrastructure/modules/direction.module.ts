import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectionEntity } from '../db/entities/direction.entity';
import { DirectionController } from 'src/presintation/controllers/direction.controller';
import { DirectionRepository } from '../db/repositories/direction.repository';
import { DirectionService } from 'src/use-cases/direction/service/direction.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DirectionEntity]),
  ],
  providers: [
    {
        provide: 'directionRepository',
        useClass: DirectionRepository,
    },
    {
        provide: 'directionService',
        useClass: DirectionService,
    }
  ],
  controllers: [DirectionController],
})
export class DirectionModule {}
