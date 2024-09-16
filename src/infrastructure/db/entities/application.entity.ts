import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DirectionEntity } from './direction.entity';

@Entity() 
export class ApplicationEntity {
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

  @Column('varchar')
  @IsNotEmpty()
  status: string;

  @ManyToOne(() => DirectionEntity, (direction) => direction.applications)
  direction: DirectionEntity[];
}
