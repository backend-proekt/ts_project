import { ICreateApplicationDto } from 'src/use-cases/application/interface/dto/create.application.dto.interface';

export class CreateApplicationDto implements ICreateApplicationDto {
  id?: string;
  fio: string;
  date: string;
  parents_fio: string
  phone_number: string;
  email: string;
  status: string;
  directionId: string;
}