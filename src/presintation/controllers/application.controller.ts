import { Controller, Get, Inject, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { IApplicationService } from 'src/use-cases/application/interface/service/application.service.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/infrastructure/JWT/guards/jwt.guard';
import { Response } from 'express';
//import { ApplicationId } from 'src/infrastructure/decorators/application-id.decorator';

@Controller('application')
@ApiTags('Application')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ApplicationController {
  constructor(
    @Inject('applicationService')
    private readonly applicationService: IApplicationService,
  ) {}

  /*@Get('getApplication')
  async findById(@ApplicationId() id: string) {
    const application = await this.applicationService.findById(id);

    return {
      id: application.id,
      fio: application.fio,
      date: application.date,
      parents_fio: application.parents_fio,
      phone_number: application.phone_number,
      email: application.email,
    };
  }*/

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

  @Post(':applicationId/groups/:groupId')
  async addApplicationToGroup(
    @Param('applicationId') applicationId: string,
    @Param('groupId') groupId: string,
  ): Promise<void> {
    await this.applicationService.addApplicationToGroup(applicationId, groupId);
  }

  @Post(':applicationId/directions/:directionId')
  async addApplicationToDirection(
    @Param('applicationId') applicationId: string,
    @Param('directionId') directionId: string,
  ): Promise<void> {
    await this.applicationService.addApplicationToDirection(applicationId, directionId);
  }
}
