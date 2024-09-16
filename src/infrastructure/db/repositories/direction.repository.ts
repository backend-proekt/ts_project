import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DirectionEntity } from "../entities/direction.entity";
import { Repository } from "typeorm";
import { IDirectionEntity } from "src/entiies/direction/interface/direction.entity.interface";
import { ICreateDirectionDto } from "src/use-cases/direction/interface/dto/create.direction.dto.interface";
import { IDirectionRepository } from "src/use-cases/direction/interface/repository/direction.repository.interface";

@Injectable()
export class DirectionRepository implements IDirectionRepository {
    constructor(
        @InjectRepository(DirectionEntity)
        private readonly directionRepository: Repository<DirectionEntity>
    ) { }

    async createDirection(data: ICreateDirectionDto): Promise<IDirectionEntity> {
        try {
            const direction = this.directionRepository.create(data);
            return await this.directionRepository.save(direction);
        } catch (error) {
            throw new Error('Direction not found');
        }
    }

    async findOne(directionId: string): Promise<IDirectionEntity> {
        try {
            return await this.directionRepository.findOne({ where: { id: directionId } });
        } catch (error) {
            throw new Error('Direction not found');
        }
    }

    async getDirection(directionId: string) {
        try {
            return await this.directionRepository.findOne({ where: { id: directionId } });
        } catch (error) {
            throw new Error('Direction not found');
        }
    }
}