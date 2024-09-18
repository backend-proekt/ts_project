import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from '../db/entities/task.entity';
import { TaskRepository } from '../db/repositories/task.repository';
import { TaskController } from 'src/presintation/controllers/task.controller';
import { TaskService } from 'src/use-cases/task/service/task.service';
import { UserRepository } from '../db/repositories/user.repository';
import { UserEntity } from '../db/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, UserEntity])],
  controllers: [TaskController],
  providers: [
    {
      provide: 'taskRepository',
      useClass: TaskRepository,
    },
    {
      provide: 'taskService',
      useClass: TaskService,
    },
    {
      provide: 'userRepository',
      useClass: UserRepository,
    },
  ],
})
export class TaskModule {}
