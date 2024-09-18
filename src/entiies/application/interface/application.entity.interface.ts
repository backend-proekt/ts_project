import { IDirectionEntity } from "src/entiies/direction/interface/direction.entity.interface";

export interface IApplicationEntity {
  id?: string;
  fio: string;
  date: string;
  parents_fio: string
  phone_number: string;
  email: string;
  status: string;
  direction: IDirectionEntity[];
}
