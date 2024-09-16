import { Inject, Injectable } from '@nestjs/common';
import { IDirectionRepository } from '../interface/repository/direction.repository.interface';
import { IDirectionEntity } from 'src/entiies/direction/interface/direction.entity.interface';
import { IDirectionService } from '../interface/service/direction.service.interface';
import { ICreateDirectionDto } from '../interface/dto/create.direction.dto.interface';

@Injectable()
export class DirectionService implements IDirectionService {
  constructor(
    @Inject('directionRepository')
    private readonly directionRepository: IDirectionRepository
  ) {}

  async getDirection(directionId: string): Promise<IDirectionEntity> {
    const direction = await this.directionRepository.getDirection(directionId);

    if (!direction) {
      throw new Error('Direction not found');
    }

    return direction;
  }
  
  async createDirection(data: ICreateDirectionDto): Promise<IDirectionEntity> {
      try {
        return await this.directionRepository.createDirection(data);
      } catch (error) {
        throw new Error('Direction not found');
      }
  }
}
