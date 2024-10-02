import { Inject, Injectable } from '@nestjs/common';
import { ISpecialtyRepository } from '../interface/repository/specialty.repository.interface';
import { ISpecialtyEntity } from 'src/entiies/specialty/interface/specialty.entity.interface';
import { ISpecialtyService } from '../interface/service/specialty.service.interface';
import { ICreateSpecialtyDto } from '../interface/dto/create.specialty.dto.interface';

@Injectable()
export class SpecialtyService implements ISpecialtyService {
  constructor(
    @Inject('SpecialtyRepository')
    private readonly SpecialtyRepository: ISpecialtyRepository
  ) {}

  async getSpecialty(specialtyId: string): Promise<ISpecialtyEntity> {
    const specialty = await this.SpecialtyRepository.getSpecialty(specialtyId);

    if (!specialty) {
      throw new Error('Specialty not found');
    }

    return specialty;
  }
  
  async createSpecialty(data: ICreateSpecialtyDto): Promise<ISpecialtyEntity> {
      try {
        return await this.SpecialtyRepository.createSpecialty(data);
      } catch (error) {
        throw new Error('Specialty not found');
      }
  }
}
