import { IApplicationEntity } from 'src/entiies/application/interface/application.entity.interface';
import { ICreateApplicationDto } from '../dto/create.application.dto.interface';

export interface IApplicationRepository {
  createApplication(data: ICreateApplicationDto): Promise<IApplicationEntity>;
  findAllApplications(): Promise<IApplicationEntity[]>;
  deleteApplication(id: string): Promise<void>;
  findById(id: string): Promise<IApplicationEntity>;
  findByEmail(email: string): Promise<IApplicationEntity>;
  findByName(fullName: string): Promise<IApplicationEntity>;
}
