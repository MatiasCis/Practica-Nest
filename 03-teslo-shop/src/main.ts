import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no declaradas del dto
      forbidNonWhitelisted: true, // Lanza error 400 si el body contiene campos no permitidos
    })
  )

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
