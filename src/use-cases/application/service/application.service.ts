import { Inject, Injectable } from '@nestjs/common';
import { IApplicationService } from '../interface/service/application.service.interface';
import { IApplicationRepository } from '../interface/repository/application.repository.interface';
import { IApplicationEntity } from 'src/entiies/application/interface/application.entity.interface';
import { ICreateApplicationDto } from '../interface/dto/create.application.dto.interface';
import { IDirectionRepository } from 'src/use-cases/direction/interface/repository/direction.repository.interface';

@Injectable()
export class ApplicationService implements IApplicationService {
  constructor(
    @Inject('applicationRepository')
    private readonly applicationRepository: IApplicationRepository,
    @Inject('directionRepository')
    private readonly directionRepository: IDirectionRepository,
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

  async findByFio(fio: string): Promise<IApplicationEntity> {
    return await this.applicationRepository.findByFio(fio);
  }

  async findByEmail(email: string): Promise<IApplicationEntity> {
    return await this.applicationRepository.findByEmail(email);
  }

  async addApplicationToDirection(applicationId: string, directionId: string): Promise<void> {
    const application = await this.applicationRepository.findOne(applicationId);
    const direction = await this.directionRepository.findOne(directionId);

    if (!application || !direction) {
      throw new Error('Application or Direction not found');
    }
  }
}
