import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/*
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseController } from './database/database.controller';
import { UsersController } from './users/users.controller'; */

@Module({
  imports: [MulterModule.register({
    dest: './uploaded',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
