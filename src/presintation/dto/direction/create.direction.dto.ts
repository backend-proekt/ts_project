import { ICreateDirectionDto } from 'src/use-cases/direction/interface/dto/create.direction.dto.interface';

export class CreateDirectionDto implements ICreateDirectionDto {
  id?: string;
  name: string;
}
