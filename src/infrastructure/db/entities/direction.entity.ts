import { Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany } from 'typeorm';
import { GroupEntity } from './group.entity';
import { StudentEntity } from './student.entity';
import { ApplicationEntity } from './application.entity';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class DirectionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  @IsNotEmpty()
  name: string;

  @OneToMany(() => GroupEntity, (group) => group.direction)
  groups: GroupEntity[];

  @OneToMany(() => StudentEntity, (student) => student.direction)
  students: StudentEntity[];

  @OneToMany(() => ApplicationEntity, (application) => application.direction)
  applications: ApplicationEntity[];
}
