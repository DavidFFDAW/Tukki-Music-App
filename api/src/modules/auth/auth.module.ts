import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../database/database.module';
import { AuthProviders } from './auth.providers';

@Module({
  controllers: [AuthController],
  providers: [...AuthProviders, AuthService],
  imports: [DatabaseModule],
  exports: [AuthService],
})
export class AuthModule {}
