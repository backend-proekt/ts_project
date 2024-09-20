import { StudentEntity } from "src/infrastructure/db/entities/student.entity";
import { TaskEntity } from "src/infrastructure/db/entities/task.entity";
import { UserEntity } from "src/infrastructure/db/entities/user.entity";

export interface IGroupEntity {
  id: string;
  name: string;
  users: UserEntity[];
  tasks: TaskEntity[];
}
