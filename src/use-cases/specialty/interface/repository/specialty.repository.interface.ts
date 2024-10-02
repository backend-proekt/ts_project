import { ISpecialtyEntity } from "src/entiies/specialty/interface/specialty.entity.interface";
import { ICreateSpecialtyDto } from "../dto/create.specialty.dto.interface";

export interface ISpecialtyRepository {
    findOne(SpecialtyId: string): Promise<ISpecialtyEntity>;
    getSpecialty(SpecialtyId: string): Promise<ISpecialtyEntity>;
    createSpecialty(data: ICreateSpecialtyDto): Promise<ISpecialtyEntity>;
}