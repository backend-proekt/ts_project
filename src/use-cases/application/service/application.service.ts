import { Inject, Injectable } from '@nestjs/common';
import { IApplicationService } from '../interface/service/application.service.interface';
import { IApplicationRepository } from '../interface/repository/application.repository.interface';
import { IApplicationEntity } from 'src/entiies/application/interface/application.entity.interface';
import { ICreateApplicationDto } from '../interface/dto/create.application.dto.interface';
import { ISpecialtyRepository } from 'src/use-cases/Specialty/interface/repository/specialty.repository.interface';

@Injectable()
export class ApplicationService implements IApplicationService {
  constructor(
    @Inject('applicationRepository')
    private readonly applicationRepository: IApplicationRepository,
    @Inject('SpecialtyRepository')
    private readonly SpecialtyRepository: ISpecialtyRepository,
  ) {}

  async createApplication(data: ICreateApplicationDto): Promise<IApplicationEntity> {

    return this.applicationRepository.createApplication({
      status: "Новый",
      typeOfLearning: data.typeOfLearning,
      fullName: data.fullName,
      age: data.age,
      city: data.city,
      specialty: data.specialty,
      parentsName: data.parentsName,
      phone: data.phone,
      email: data.email,
      url: data.url,
    });
  }

  async findApplicationById(id: string): Promise<IApplicationEntity> {
    return await this.applicationRepository.findApplicationById(id);
  }

  async findByName(fullName: string): Promise<IApplicationEntity> {
    return await this.applicationRepository.findByName(fullName);
  }

  async findByEmail(email: string): Promise<IApplicationEntity> {
    return await this.applicationRepository.findByEmail(email);
  }
}
