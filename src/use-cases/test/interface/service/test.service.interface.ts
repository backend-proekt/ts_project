import { ITestEntity } from "src/entiies/test/interface/test.entity.interface";
import { ICreateTestDto } from "../dto/create.test.dto.interface";

export interface ITestService {
    getTest(testId: string): Promise<ITestEntity>;
    createTest(data: ICreateTestDto): Promise<ITestEntity>;
}