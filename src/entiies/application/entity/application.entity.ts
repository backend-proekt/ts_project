import { IDirectionEntity } from 'src/entiies/direction/interface/direction.entity.interface';
import { IApplicationEntity } from '../interface/application.entity.interface';
import { TApplicationEntity } from '../type/application.entity.type';

export class ApplicationEntity implements IApplicationEntity {
  id?: string;
  fio: string;
  date: string;
  parents_fio: string
  phone_number: string;
  email: string;
  status: string;
  direction: IDirectionEntity[];

  constructor(data: TApplicationEntity) {
    this.id = data.id;
    this.fio = data.fio;
    this.date = data.date;
    this.parents_fio = data.parents_fio;
    this.phone_number = data.phone_number;
    this.email = data.email;
  }
}
