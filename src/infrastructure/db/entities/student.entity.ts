import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DirectionEntity } from './direction.entity';
import { GroupEntity } from './group.entity';

@Entity() 
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  @IsNotEmpty()
  fio: string;

  @Column('varchar')
  @IsNotEmpty()
  date: string;

  @Column('varchar')
  parents_fio: string;

  @Column('varchar')
  @IsNotEmpty()
  @MinLength(10)
  phone_number: string;

  @Column('varchar')
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ManyToOne(() => DirectionEntity, (direction) => direction.students)
  direction: DirectionEntity[];

  @ManyToOne(() => GroupEntity, (group) => group.students)
  group: GroupEntity[];
}
