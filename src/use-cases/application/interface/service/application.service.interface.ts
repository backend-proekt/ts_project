import { IApplicationEntity } from 'src/entiies/application/interface/application.entity.interface';
import { ICreateApplicationDto } from '../dto/create.application.dto.interface';

export interface IApplicationService {
  createApplication(data: ICreateApplicationDto): Promise<IApplicationEntity>;
  findApplicationById(id: string): Promise<IApplicationEntity>;
  findByName(fullName: string): Promise<IApplicationEntity>;
  findByEmail(email: string): Promise<IApplicationEntity>;
}
