import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SpecialtyEntity } from './specialty.entity';

@Entity() 
export class ApplicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  @IsNotEmpty()
  status: string;

  @Column('varchar')
  @IsNotEmpty()
  typeOfLearning: string;

  @Column('varchar')
  @IsNotEmpty()
  fullName: string;

  @Column('varchar')
  @IsNotEmpty()
  age: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  @IsNotEmpty()
  specialty: string;

  @Column('varchar')
  parentsName: string;

  @Column('varchar')
  @IsNotEmpty()
  phone: string;

  @Column('varchar')
  @IsEmail()
  email: string;

  @Column('varchar')
  url: string;

  @ManyToOne(() => SpecialtyEntity, (specialtyId) => specialtyId.applications)
  specialtyId: SpecialtyEntity[];
}