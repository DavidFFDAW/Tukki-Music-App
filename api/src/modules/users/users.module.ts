import { EnrollService } from './services/enroll.service';
import { Module } from '@nestjs/common';
import { UserService } from './services/users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService, EnrollService],
  exports: [UserService],
})
export class UserModule {}