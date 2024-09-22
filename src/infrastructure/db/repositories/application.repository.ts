import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateApplicationDto } from 'src/use-cases/application/interface/dto/create.application.dto.interface';
import { IApplicationRepository } from 'src/use-cases/application/interface/repository/application.repository.interface';
import { ApplicationEntity } from '../entities/application.entity';
import { Repository } from 'typeorm';
import { IApplicationEntity } from 'src/entiies/application/interface/application.entity.interface';

@Injectable()
export class ApplicationRepository implements IApplicationRepository {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly applicationRepository: Repository<ApplicationEntity>,
  ) {}

  async createApplication(data: ICreateApplicationDto): Promise<IApplicationEntity> {
    try {
      const application = this.applicationRepository.create(data);
      return await this.applicationRepository.save(application);
    } catch (error) {
      throw error;
    }
  }

  async findApplicationById(id: string): Promise<IApplicationEntity> {
    try {
      return this.applicationRepository.findOneBy({ id });
    } catch (error) {
      throw new Error('Application not found');
    }
  }

  findByEmail(email: string): Promise<IApplicationEntity> {
    try {
      return this.applicationRepository.findOneBy({ email });
    } catch (error) {
      throw new Error('Application not found');
    }
  }

  findByFio(fullName: string): Promise<IApplicationEntity> {
    try {
      return this.applicationRepository.findOneBy({ fullName });
    } catch (error) {
      throw new Error('Application not found');
    }
  }

  async findOne(applicationId: string): Promise<IApplicationEntity> {
    try {
      return this.applicationRepository.findOne({ where: { id: applicationId } });
    } catch (error) {
      throw new Error('Application not found');
    }
  }

  async addApplicationToDirection(application: IApplicationEntity) {
    try {
      return await this.applicationRepository.save(application);
    } catch (error) {
      throw new Error(error);
    }
  }
}
