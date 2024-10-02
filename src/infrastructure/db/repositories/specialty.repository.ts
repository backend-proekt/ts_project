import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SpecialtyEntity } from "../entities/Specialty.entity";
import { Repository } from "typeorm";
import { ISpecialtyEntity } from "src/entiies/Specialty/interface/Specialty.entity.interface";
import { ICreateSpecialtyDto } from "src/use-cases/Specialty/interface/dto/create.Specialty.dto.interface";
import { ISpecialtyRepository } from "src/use-cases/Specialty/interface/repository/Specialty.repository.interface";

@Injectable()
export class SpecialtyRepository implements ISpecialtyRepository {
    constructor(
        @InjectRepository(SpecialtyEntity)
        private readonly SpecialtyRepository: Repository<SpecialtyEntity>
    ) { }

    async createSpecialty(data: ICreateSpecialtyDto): Promise<ISpecialtyEntity> {
        try {
            const Specialty = this.SpecialtyRepository.create(data);
            return await this.SpecialtyRepository.save(Specialty);
        } catch (error) {
            throw new Error('Specialty not found');
        }
    }

    async findOne(SpecialtyId: string): Promise<ISpecialtyEntity> {
        try {
            return await this.SpecialtyRepository.findOne({ where: { id: SpecialtyId } });
        } catch (error) {
            throw new Error('Specialty not found');
        }
    }

    async getSpecialty(SpecialtyId: string) {
        try {
            return await this.SpecialtyRepository.findOne({ where: { id: SpecialtyId } });
        } catch (error) {
            throw new Error('Specialty not found');
        }
    }
}