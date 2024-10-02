import { ICreateSpecialtyDto } from 'src/use-cases/specialty/interface/dto/create.specialty.dto.interface';

export class CreateSpecialtyDto implements ICreateSpecialtyDto {
  name: string;
}