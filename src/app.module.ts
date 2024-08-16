import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { UserModule } from './modules/user/infraestructure/presentation/user.module';
import { RoleModule } from './modules/role/interfaces/role.module';
import { AppointmentModule } from './modules/appointment/infraestructure/presentation/appointment.module';

// El Module es el nucleo central de los servicios, donde se unifican los controladores y servicios
@Module({
  // Decorador de clase

  //en imports esta el ARBOL DE MODULOS
  imports: [StudentModule, UserModule, RoleModule, AppointmentModule], // en se encuentran todos los registros de los modulos de la app, IMPORTANTE si no se declara aca el modulo no se podran acceder a las rutas de los modulos
  controllers: [AppController], // en el se colocan las rutas que van a ser expuestas mediante HTTP
  providers: [AppService], // en el es donde deben ir los servicios inyectables con los cuales trabaja el modulo, OJO solo refente en el
  // contexto del modulo mas no todos los servicios
})
export class AppModule {}
