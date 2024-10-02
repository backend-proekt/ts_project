import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './infrastructure/modules/user.module';
import { TypeOrmComponent } from './infrastructure/db/conect';
import { AuthModule } from './infrastructure/modules/auth.module';
import { ApplicationModule } from './infrastructure/modules/application.module';
import { StudentModule } from './infrastructure/modules/student.module';
import { SpecialtyModule } from './infrastructure/modules/specialty.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmComponent,
    UserModule,
    AuthModule,
    ApplicationModule,
    StudentModule,
    SpecialtyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
