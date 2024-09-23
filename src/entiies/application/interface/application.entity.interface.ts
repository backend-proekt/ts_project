import { IDirectionEntity } from "src/entiies/direction/interface/direction.entity.interface";

export interface IApplicationEntity {
  id?: string;
  status?: string;
  typeOfLearning: string;
  fullName: string;
  age: string;
  city: string;
  specialty: string;
  parentsName: string;
  phone: string;
  email: string;
  url: string;
  direction: IDirectionEntity[];
}
