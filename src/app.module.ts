import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './infrastructure/modules/user.module';
import { TypeOrmComponent } from './infrastructure/db/conect';
import { TaskModule } from './infrastructure/modules/task.module';
import { AuthModule } from './infrastructure/modules/auth.module';
import { GroupModule } from './infrastructure/modules/group.module';
import { ApplicationModule } from './infrastructure/modules/application.module';
import { StudentModule } from './infrastructure/modules/student.module';
import { DirectionModule } from './infrastructure/modules/direction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmComponent,
    UserModule,
    TaskModule,
    AuthModule,
    GroupModule,
    ApplicationModule,
    StudentModule,
    DirectionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
