import { IDirectionEntity } from 'src/entiies/direction/interface/direction.entity.interface';
import { IGroupEntity } from "src/entiies/group/interface/group.entity.interface";
import { IStudentEntity } from '../interface/student.entity.interface';
import { TStudentEntity } from '../type/student.entity.type';

export class StudentEntity implements IStudentEntity {
  id?: string;
  fio: string;
  date: string;
  parents_fio: string
  phone_number: string;
  email: string;
  direction: IDirectionEntity[];
  group: IGroupEntity[];

  constructor(data: TStudentEntity) {
    this.id = data.id;
    this.fio = data.fio;
    this.date = data.date;
    this.parents_fio = data.parents_fio;
    this.phone_number = data.phone_number;
    this.email = data.email;
  }
}
