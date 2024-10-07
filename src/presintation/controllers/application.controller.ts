import { Controller, Get, Delete, Put, Inject, Param, Post, Body } from '@nestjs/common';
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
import { Response } from 'express';
import { ICreateApplicationDto } from 'src/use-cases/application/interface/dto/create.application.dto.interface';


@Controller('application')
@ApiTags('Application')
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

  @Get('get')
  @ApiOperation({ summary: 'Get all applications' })
  @ApiResponse({ status: 200, description: 'Return all applications.' })
  @ApiResponse({ status: 404, description: 'Applications not found.' })
  async findAllApplications() {
    return await this.applicationService.findAllApplications();
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a application by its ID' })
  @ApiParam({ name: 'id', description: 'Application ID', type: 'string' })
  @ApiResponse({ status: 200, description: 'The application has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Application not found.' })
  async deleteApplication(@Param('id') id: string) {
    await this.applicationService.deleteApplication(id);
  }

  @Get('findById/:id')
  @ApiOperation({ summary: 'Get a application by its ID' })
  @ApiParam({ name: 'id', description: 'Application ID', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return the application with the given ID.' })
  @ApiResponse({ status: 404, description: 'Application not found.' })
  async findById(@Param('id') id: string) {
    return await this.applicationService.findById(id);
  }

  @Get('findByName/:fullName')
  @ApiOperation({ summary: 'Get a application by its Name' })
  @ApiParam({ name: 'fullName', description: 'Application fullName', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return the application with the given fullname.' })
  @ApiResponse({ status: 404, description: 'Application not found.' })
  async findByName(@Param('fullName') fullName: string) {
      return await this.applicationService.findByName(fullName);
  };


  @Get('findByEmail/:email')
  @ApiOperation({ summary: 'Get a application by its email' })
  @ApiParam({ name: 'email', description: 'Application email', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return the application with the given email.' })
  @ApiResponse({ status: 404, description: 'Application not found.' })
  async findByEmail(@Param('email') email: string) {
      return await this.applicationService.findByEmail(email);
  };
}
