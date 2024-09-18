import { IApplicationEntity } from 'src/entiies/application/interface/application.entity.interface';
import { ICreateApplicationDto } from '../dto/create.application.dto.interface';

export interface IApplicationService {
  createApplication(data: ICreateApplicationDto): Promise<IApplicationEntity>;
  findById(id: string): Promise<IApplicationEntity>;
  findByFio(fio: string): Promise<IApplicationEntity>;
  findByEmail(email: string): Promise<IApplicationEntity>;
  addApplicationToDirection(applicationId: string, directionId: string): Promise<void>;
}
