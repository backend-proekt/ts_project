import { DirectionEntity } from "src/infrastructure/db/entities/direction.entity";
import { StudentEntity } from "src/infrastructure/db/entities/student.entity";

export interface IGroupEntity {
  id: string;
  name: string;
  direction: DirectionEntity[];
  students: StudentEntity[];
}
