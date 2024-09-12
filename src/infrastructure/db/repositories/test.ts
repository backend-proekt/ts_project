import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TestEntity } from "../entities/test.entity";
import { Repository } from "typeorm";
import { ITestEntity } from "src/entiies/test/interface/test.entity.interface";
import { ICreateTestDto } from "src/use-cases/test/interface/dto/create.test.dto.interface";
import { ITestRepository } from "src/use-cases/test/interface/repository/test.repository.interface";

@Injectable()
export class TestRepository implements ITestRepository {
    constructor(
        @InjectRepository(TestEntity)
        private readonly testRepository: Repository<TestEntity>
    ) { }

    async createTest(data: ICreateTestDto): Promise<ITestEntity> {
        try {
            const test = this.testRepository.create(data);
            return await this.testRepository.save(test);
        } catch (error) {
            throw new Error('Test not found');
        }
    }

    async findOne(testId: string): Promise<ITestEntity> {
        try {
            return await this.testRepository.findOne({ where: { id: testId }, relations: ["users"] });
        } catch (error) {
            throw new Error('Test not found');
        }
    }

    async getTest(testId: string) {
        try {
            return await this.testRepository.findOne({ where: { id: testId }, relations: ["users", "tasks"] });
        } catch (error) {
            throw new Error('Test not found');
        }
    }
}