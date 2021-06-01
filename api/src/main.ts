import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}

function configurePaths() {
  const dir = __dirname + '/../exports';

  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

bootstrap();
