import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { EnrollService } from './enroll.service';

@Module({
  imports: [], // OJo ya dentro de una ramificacion del ARBOL de MODULOS es poco porbable que vayan importaciones SOLO ALMENOS QUE S VAYAN A USAR TODAS SUS FUNCIONALIDADES
  controllers: [StudentController],
  providers: [
    // forma resumida de declarar un servicio (ACTUAL)
    StudentService,
    /*{
      // FORMA DE DECLARAR un service (Antigua)
      provide: StudentService, //provide es un token un key para referenciar el servicio (dato si se cammbia se recomienda en mayuscula)
      useClass: StudentService, // useClass es para asociar el servicio
    },*/
    {
      // FORMA DE DECLARAR un service con distinto nombre en su key o token
      provide: 'STUDENT', // key el cual se debera acceder a el por el mismo
      useClass: StudentService,
    },
    {
      // FORMA DE DECLARAR un service con un valor
      provide: 'CONFIG',
      useValue: {
        // useValue es para asociar al servicio un valor y este sera usado donde se implemente
        url: 'http://localhost:1000',
      },
    },
    {
      // FORMA DE DECLARAR con un service factoria/function OJO SIEMPRE DEBE RETORNAR ALGO
      provide: 'CONFIG2',
      useFactory: () => {
        // useFactory para implementar una funcion
        return {
          // siempre retornar algo
          url: 'http://localhost:2000',
        };
      },
    },
    {
      // FORMA DE DECLARAR un service con y como valor tenga una variable de entorno
      provide: 'ENVIRONMENT',
      useValue: process.env.NODE_ENV, // acceder a variable de entorno
    },
    {
      // FORMA DE DECLARAR un service asociado a un injection de otro provider
      provide: 'CONFIG3',
      useFactory: (env, config) => {
        // se usa useFactory
        return {
          // se retorna 2 propiedades
          url:
            env === 'development'
              ? 'http://localhost:3000'
              : 'http://localhost:4000',
          urlConfig: config.url,
        };
      },
      // inject sobre escribira el resultado por estas 2 propiedades que viene del provider CONFIG2
      inject: ['ENVIRONMENT', 'CONFIG2'],
    },
    {
      // FORMA DE DECLARAR un service cuando existe un servicio de autenticacion y se pasa como valor
      provide: 'CONFIG4',
      useValue: {
        serverOAuth2: 'https://localhost:5000',
      },
    },
    EnrollService,
  ],
})
export class StudentModule {}
