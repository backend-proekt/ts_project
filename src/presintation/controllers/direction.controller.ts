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
  import { IDirectionEntity } from 'src/entiies/direction/interface/direction.entity.interface';
  import { JwtAuthGuard } from 'src/infrastructure/JWT/guards/jwt.guard';
  import { ICreateDirectionDto } from 'src/use-cases/direction/interface/dto/create.direction.dto.interface';
  import { IDirectionService } from 'src/use-cases/direction/interface/service/direction.service.interface';
  
  @Controller('directions')
  @ApiTags('Direction')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  export class DirectionController {
    constructor(
      @Inject('directionService')
      private readonly directionService: IDirectionService,
    ) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new direction' })
    @ApiResponse({
      status: 201,
      description: 'The direction has been successfully created.',
    })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    @ApiBody({
      schema: {
        properties: {
          name: { type: 'string', default: 'Direction name' },
        },
      },
    })
    async createDirection(
      @Body() createDirectionDto: ICreateDirectionDto,
    ): Promise<IDirectionEntity> {
      return await this.directionService.createDirection(createDirectionDto);
    }
  
    @Get(':directionId')
    @ApiOperation({ summary: 'Get a direction' })
    @ApiResponse({ status: 200, description: 'Return the direction' })
    @ApiResponse({ status: 404, description: 'Direction not found' })
    @ApiParam({
      name: 'directionId',
      description: 'ID of the direction to retrieve',
      type: String,
    })
    async getDirection(
      @Param('directionId') directionId: string,
    ): Promise<IDirectionEntity> {
      return await this.directionService.getDirection(directionId);
    }
  }
  