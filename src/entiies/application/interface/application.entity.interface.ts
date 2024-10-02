import { ISpecialtyEntity } from "src/entiies/specialty/interface/specialty.entity.interface";

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
  specialtyId: ISpecialtyEntity[];
}
