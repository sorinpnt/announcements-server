import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_ROUTES } from './app-routes';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix(APP_ROUTES.APP_PREFIX);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
