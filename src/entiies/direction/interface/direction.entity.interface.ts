import { StudentEntity } from "src/infrastructure/db/entities/student.entity";
import { ApplicationEntity } from "src/infrastructure/db/entities/application.entity";

export interface IDirectionEntity {
  id: string;
  name: string;
  students: StudentEntity[];
  applications: ApplicationEntity[];
}
