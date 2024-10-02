import { StudentEntity } from "src/infrastructure/db/entities/student.entity";
import { ApplicationEntity } from "src/infrastructure/db/entities/application.entity";

export interface ISpecialtyEntity {
  id: string;
  name: string;
  students: StudentEntity[];
  applications: ApplicationEntity[];
}
