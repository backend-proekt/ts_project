import { Controller, Get, Inject, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { IStudentService } from 'src/use-cases/student/interface/service/student.service.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/infrastructure/JWT/guards/jwt.guard';
import { Response } from 'express';
//import { StudentId } from 'src/infrastructure/decorators/student-id.decorator';

@Controller('student')
@ApiTags('Student')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class StudentController {
  constructor(
    @Inject('studentService')
    private readonly studentService: IStudentService,
  ) {}

  /*@Get('getStudent')
  async findById(@StudentId() id: string) {
    const student = await this.studentService.findById(id);

    return {
      id: student.id,
      fio: student.fio,
      date: student.date,
      parents_fio: student.parents_fio,
      phone_number: student.phone_number,
      email: student.email,
    };
  }*/

  @Get('findStudent/:email')
  async findByEmail(@Param('email') email: string) {
    const student = await this.studentService.findByEmail(email);

    return {
        id: student.id,
        fio: student.fio,
        date: student.date,
        parents_fio: student.parents_fio,
        phone_number: student.phone_number,
        email: student.email,
    };
  }

  @Get('findStudent/:fio')
  async findByFio(@Param('fio') fio: string) {
    const student = await this.studentService.findByFio(fio);

    return {
        id: student.id,
        fio: student.fio,
        date: student.date,
        parents_fio: student.parents_fio,
        phone_number: student.phone_number,
        email: student.email,
    };
  }

  @Post(':studentId/groups/:groupId')
  async addStudentToGroup(
    @Param('studentId') studentId: string,
    @Param('groupId') groupId: string,
  ): Promise<void> {
    await this.studentService.addStudentToGroup(studentId, groupId);
  }

  @Post(':studentId/directions/:directionId')
  async addStudentToDirection(
    @Param('studentId') studentId: string,
    @Param('directionId') directionId: string,
  ): Promise<void> {
    await this.studentService.addStudentToDirection(studentId, directionId);
  }
}
