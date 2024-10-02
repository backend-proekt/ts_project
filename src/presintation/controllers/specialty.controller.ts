import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiParam,
    ApiBody,
    ApiBearerAuth,
  } from '@nestjs/swagger';
  import { ISpecialtyEntity } from 'src/entiies/specialty/interface/specialty.entity.interface';
  import { JwtAuthGuard } from 'src/infrastructure/JWT/guards/jwt.guard';
  import { ICreateSpecialtyDto } from 'src/use-cases/Specialty/interface/dto/create.Specialty.dto.interface';
  import { ISpecialtyService } from 'src/use-cases/specialty/interface/service/specialty.service.interface';
  
  @Controller('Specialtys')
  @ApiTags('Specialty')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  export class SpecialtyController {
    constructor(
      @Inject('SpecialtyService')
      private readonly SpecialtyService: ISpecialtyService,
    ) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new Specialty' })
    @ApiResponse({
      status: 201,
      description: 'The Specialty has been successfully created.',
    })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    @ApiBody({
      schema: {
        properties: {
          name: { type: 'string', default: 'Specialty name' },
        },
      },
    })
    async createSpecialty(
      @Body() createSpecialtyDto: ICreateSpecialtyDto,
    ): Promise<ISpecialtyEntity> {
      return await this.SpecialtyService.createSpecialty(createSpecialtyDto);
    }
  
    @Get(':SpecialtyId')
    @ApiOperation({ summary: 'Get a Specialty' })
    @ApiResponse({ status: 200, description: 'Return the Specialty' })
    @ApiResponse({ status: 404, description: 'Specialty not found' })
    @ApiParam({
      name: 'SpecialtyId',
      description: 'ID of the Specialty to retrieve',
      type: String,
    })
    async getSpecialty(
      @Param('specialtyId') specialtyId: string,
    ): Promise<ISpecialtyEntity> {
      return await this.SpecialtyService.getSpecialty(specialtyId);
    }
  }