import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Bootstrap es llamado a las funciones de arranque de application
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppModule es el modulo root
  // NestFactory permite crear una instancia de application, el cual recibe como parametro el modulo root
  await app.listen(3000);
}
bootstrap();
