import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialtyEntity } from '../db/entities/Specialty.entity';
import { SpecialtyController } from 'src/presintation/controllers/specialty.controller';
import { SpecialtyRepository } from '../db/repositories/specialty.repository';
import { SpecialtyService } from 'src/use-cases/specialty/service/specialty.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SpecialtyEntity]),
  ],
  providers: [
    {
        provide: 'SpecialtyRepository',
        useClass: SpecialtyRepository,
    },
    {
        provide: 'SpecialtyService',
        useClass: SpecialtyService,
    }
  ],
  controllers: [SpecialtyController],
})
export class SpecialtyModule {}
