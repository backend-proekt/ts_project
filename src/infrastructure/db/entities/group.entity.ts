import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import { DirectionEntity } from './direction.entity';
import { IsNotEmpty } from 'class-validator';
import { StudentEntity } from './student.entity';

@Entity()
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  @IsNotEmpty()
  name: string;

  @ManyToOne(() => DirectionEntity, (direction) => direction.groups)
  direction: DirectionEntity[];

  @OneToMany(() => StudentEntity, (student) => student.group)
  students: StudentEntity[];
}