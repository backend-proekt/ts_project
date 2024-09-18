import { ICreateGroupDto } from 'src/use-cases/group/interface/dto/create.group.dto.interface';

export class CreateGroupDto implements ICreateGroupDto {
  id?: string;
  name: string;
  groupId: string;
}
