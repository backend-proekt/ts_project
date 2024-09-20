import { Controller, Get, Inject, Param, Post, Req, Res, UseGuards, Body } from '@nestjs/common';
import { IStudentService } from 'src/use-cases/student/interface/service/student.service.interface';
import { 
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/infrastructure/JWT/guards/jwt.guard';
import { Response } from 'express';
import { ICreateStudentDto } from 'src/use-cases/student/interface/dto/create.student.dto.interface';


@Controller('student')
@ApiTags('Student')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class StudentController {
  constructor(
    @Inject('studentService')
    private readonly studentService: IStudentService,
  ) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new student' })
  @ApiConsumes('student/json')
  @ApiBody({
    schema: {
      properties: {
        id: { type: 'string', default: 'fdbskjfbdf' },
        fio: { type: 'string', default: 'fdbskjfbdf' },
        date: { type: 'string', default: 'fdbskjfbdf' },
        parents_fio: { type: 'string', default: '' },
        phone_number: { type: 'string', default: 'fdbskjfbdf' },
        email: { type: 'string', default: 'fdbskjfbdf' },
        directionId: { type: 'IDirectionEntity[]', default: ''},
        groupId: { type: 'IGroupEntity[]', default: ''},
      },
    },
  })
  @ApiResponse({ status: 201, description: 'The student has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createStudent(@Body() data: ICreateStudentDto) {
    return await this.studentService.createStudent(data);
  }

  @Get(':studentId')
  @ApiOperation({ summary: 'Get the student' })
  @ApiResponse({ status: 200, description: 'Return the student' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  @ApiParam({
    name: 'studentId',
    description: 'ID of the student to retrieve',
    type: String,
  })

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

  @Post(':studentId/directions/:directionId')
  async addStudentToDirection(
    @Param('studentId') studentId: string,
    @Param('directionId') directionId: string,
  ): Promise<void> {
    await this.studentService.addStudentToDirection(studentId, directionId);
  }

  @Post(':studentId/groups/:groupId')
  async addStudentToGroup(
    @Param('studentId') studentId: string,
    @Param('groupId') groupId: string,
  ): Promise<void> {
    await this.studentService.addStudentToGroup(studentId, groupId);
  }
}
