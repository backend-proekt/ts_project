import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { DirectionEntity } from './direction.entity';
import { IsNotEmpty } from 'class-validator';
import { TaskEntity } from './task.entity';
import { StudentEntity } from './student.entity';

@Entity()
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  @IsNotEmpty()
  name: string;

  @ManyToMany(() => UserEntity, (user) => user.groups)
  @JoinTable()
  users: UserEntity[];

  @OneToMany(() => TaskEntity, (task) => task.group)
  tasks: TaskEntity[];
}