import { GroupEntity } from "src/infrastructure/db/entities/group.entity";
import { DirectionEntity } from "src/infrastructure/db/entities/direction.entity";

export interface IStudentEntity {
  id?: string;
  fio: string;
  date: string;
  parents_fio: string;
  phone_number: string;
  email: string;
  direction: DirectionEntity[];   
  group: GroupEntity[];
}
  