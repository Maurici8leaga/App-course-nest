import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// El Module es el nucleo central de los servicios, donde se unifican los controladores y servicios
@Module({
  // Decorador de clase
  imports: [],
  controllers: [AppController], // en el se colocan las rutas que van a ser expuestas mediante HTTP
  providers: [AppService], // en el es donde deben ir los servicios inyectables con los cuales trabaja el modulo, OJO solo refente en el
  // contexto del modulo mas no todos los servicios
})
export class AppModule {}
