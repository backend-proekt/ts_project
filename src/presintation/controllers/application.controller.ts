import { Controller, Get, Inject, Param, Post, Req, Res, UseGuards, Body } from '@nestjs/common';
import { IApplicationService } from 'src/use-cases/application/interface/service/application.service.interface';
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
import { ICreateApplicationDto } from 'src/use-cases/application/interface/dto/create.application.dto.interface';


@Controller('application')
@ApiTags('Application')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ApplicationController {
  constructor(
    @Inject('applicationService')
    private readonly applicationService: IApplicationService,
  ) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new application' })
  @ApiConsumes('application/json')
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
  @ApiResponse({ status: 201, description: 'The application has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createApplication(@Body() data: ICreateApplicationDto) {
    return await this.applicationService.createApplication(data);
  }

  @Get('get/:id')
  @ApiOperation({ summary: 'Get a application by its ID' })
  @ApiParam({ name: 'id', description: 'Application ID', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return the application with the given ID.' })
  @ApiResponse({ status: 404, description: 'Application not found.' })
  async findApplicationById(@Param('id') id: string) {
    return await this.applicationService.findApplicationById(id);
  }

  @Get('findApplication/:email')
  async findByEmail(@Param('email') email: string) {
    const application = await this.applicationService.findByEmail(email);

    return {
        id: application.id,
        status: application.status,
        typeOfLearning: application.typeOfLearning,
        fullName: application.fullName,
        age: application.age,
        city: application.city,
        specialty: application.specialty,
        parentsName: application.parentsName,
        phone: application.phone,
        email: application.email,
        url: application.url,
    };
  }

  @Get('findApplication/:Name')
  async findByFio(@Param('fullName') fullName: string) {
    const application = await this.applicationService.findByName(fullName);

    return {
      id: application.id,
      status: application.status,
      typeOfLearning: application.typeOfLearning,
      fullName: application.fullName,
      age: application.age,
      city: application.city,
      specialty: application.specialty,
      parentsName: application.parentsName,
      phone: application.phone,
      email: application.email,
      url: application.url,
    };
  }

  @Post(':applicationId/directions/:directionId')
  async addApplicationToDirection(
    @Param('applicationId') applicationId: string,
    @Param('directionId') directionId: string,
  ): Promise<void> {
    await this.applicationService.addApplicationToDirection(applicationId, directionId);
  }
}
