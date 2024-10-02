import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StudentEntity } from './student.entity';
import { ApplicationEntity } from './application.entity';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class SpecialtyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  @IsNotEmpty()
  name: string;

  @OneToMany(() => StudentEntity, (student) => student.specialty)
  students: StudentEntity[];

  @OneToMany(() => ApplicationEntity, (application) => application.specialty)
  applications: ApplicationEntity[];
}
