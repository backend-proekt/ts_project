import { Inject, Injectable } from '@nestjs/common';
import { ITestRepository } from '../interface/repository/test.repository.interface';
import { ITestEntity } from 'src/entiies/test/interface/test.entity.interface';
import { ITestService } from '../interface/service/test.service.interface';
import { ICreateTestDto } from '../interface/dto/create.test.dto.interface';

@Injectable()
export class TestService implements ITestService {
  constructor(
    @Inject('testRepository')
    private readonly testRepository: ITestRepository
  ) {}

  async getTest(testId: string): Promise<ITestEntity> {
    const test = await this.testRepository.getTest(testId);

    if (!test) {
      throw new Error('Test not found');
    }

    return test;
  }
  
  async createTest(data: ICreateTestDto): Promise<ITestEntity> {
      try {
        return await this.testRepository.createTest(data);
      } catch (error) {
        throw new Error('Test not found');
      }
  }
}
