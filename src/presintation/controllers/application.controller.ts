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
        id: { type: 'string', default: 'fdbskjfbdf' },
        fio: { type: 'string', default: 'fdbskjfbdf' },
        date: { type: 'string', default: 'fdbskjfbdf' },
        parents_fio: { type: 'string', default: '' },
        phone_number: { type: 'string', default: 'fdbskjfbdf' },
        email: { type: 'string', default: 'fdbskjfbdf' },
        status: { type: 'string', default: 'новый' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'The application has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createApplication(@Body() data: ICreateApplicationDto) {
    return await this.applicationService.createApplication(data);
  }

  @Get(':applicationId')
  @ApiOperation({ summary: 'Get the application' })
  @ApiResponse({ status: 200, description: 'Return the application' })
  @ApiResponse({ status: 404, description: 'Application not found' })
  @ApiParam({
    name: 'applicationId',
    description: 'ID of the application to retrieve',
    type: String,
  })

  @Get('findApplication/:email')
  async findByEmail(@Param('email') email: string) {
    const application = await this.applicationService.findByEmail(email);

    return {
        id: application.id,
        fio: application.fio,
        date: application.date,
        parents_fio: application.parents_fio,
        phone_number: application.phone_number,
        email: application.email,
    };
  }

  @Get('findApplication/:fio')
  async findByFio(@Param('fio') fio: string) {
    const application = await this.applicationService.findByFio(fio);

    return {
        id: application.id,
        fio: application.fio,
        date: application.date,
        parents_fio: application.parents_fio,
        phone_number: application.phone_number,
        email: application.email,
    };
  }

  @Post(':applicationId/directions/:directionId')
  async addApplicationToDirection(
    @Param('applicationId') applicationId: string,
    @Param('directionId') directionId: string,
  ): Promise<void> {
    await this.applicationService.addApplicationToDirection(applicationId, directionId);
  }

  @Post(':applicationId/groups/:groupId')
  async addApplicationToGroup(
    @Param('applicationId') applicationId: string,
    @Param('groupId') groupId: string,
  ): Promise<void> {
    await this.applicationService.addApplicationToGroup(applicationId, groupId);
  }
}
