import { GroupEntity } from "src/infrastructure/db/entities/group.entity";
import { StudentEntity } from "src/infrastructure/db/entities/student.entity";
import { ApplicationEntity } from "src/infrastructure/db/entities/application.entity";

export interface IDirectionEntity {
  id: string;
  name: string;
  groups: GroupEntity[];
  students: StudentEntity[];
  applications: ApplicationEntity[];
}
