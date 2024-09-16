import { IDirectionEntity } from "src/entiies/direction/interface/direction.entity.interface";
import { ICreateDirectionDto } from "../dto/create.direction.dto.interface";

export interface IDirectionRepository {
    findOne(directionId: string): Promise<IDirectionEntity>;
    getDirection(directionId: string): Promise<IDirectionEntity>;
    createDirection(data: ICreateDirectionDto): Promise<IDirectionEntity>;
}