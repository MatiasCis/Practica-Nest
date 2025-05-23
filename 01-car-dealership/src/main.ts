import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  await app.listen(3000)
}
main();
