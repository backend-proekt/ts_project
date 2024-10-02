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
        typeOfLearning: { type: 'string', default: 'test' },
        fullName: { type: 'string', default: 'test' },
        age: { type: 'string', default: 'test' },
        city: { type: 'string', default: 'test' },
        specialty: { type: 'string', default: 'test' },
        parentsName: { type: 'string', default: 'test' },
        phone: { type: 'string', default: 'test' },
        email: { type: 'string', default: 'test' },
        url: { type: 'string', default: 'test' },
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
        typeOfLearning: student.typeOfLearning,
        fullName: student.fullName,
        age: student.age,
        city: student.city,
        specialty: student.specialty,
        parentsName: student.parentsName,
        phone: student.phone,
        email: student.email,
        url: student.url,
    };
  }

  @Get('findStudent/:fullName')
  async findByName(@Param('fullName') fullName: string) {
    const student = await this.studentService.findByName(fullName);

    return {
      id: student.id,
      typeOfLearning: student.typeOfLearning,
      fullName: student.fullName,
      age: student.age,
      city: student.city,
      specialty: student.specialty,
      parentsName: student.parentsName,
      phone: student.phone,
      email: student.email,
      url: student.url,
    };
  }
}
