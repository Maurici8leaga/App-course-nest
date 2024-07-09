import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

// Bootstrap es llamado a las funciones de arranque de application
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppModule es el modulo root
  // NestFactory permite crear una instancia de application, el cual recibe como parametro el modulo root

  // Esto es obligatorio para podre crear las validaciones de los class , info https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // permite validar todos los dtos que tengan validadores que sean reconocidos
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  // <<-----
  await app.listen(3000);
}
bootstrap();
