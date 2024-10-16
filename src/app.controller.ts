// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   // INJECTION OF DEPENDENCY (DI): design pattern
//   constructor(private readonly appService: AppService) {} // AppService es una clase que es un Provider
//   // se le coloca al parametro del constructor "private" y "readonly" para SEGURIDAD y asi no pueda modificar nada de la clase aplicadaa solo lectura

//   // Decortador de metodo
//   @Get() // Cuando no se le pasa ruta por defecto corre en el '/'
//   getHello(): string {
//     const controller = UsersController; //Se crea instancia de la clase

//     // De esta forma se obtiene la metadata OJO Y SE PUEDE YA QUE SE CREO LA INSTANCIA DE LA CLASE QUE TIENE EL DECORADOR
//     console.log('path', Reflect.getMetadata('path', controller)); // se ejecuta en tiempo de ejecución
//     console.log('paths', Reflect.getMetadata('paths', controller));
//     return this.appService.getHello(); // De esta forma se accede al metodo del service para asi mostrar el mensaje cuando acceda a la ruta especificada
//   }
// }

// // decorador de método
// function MetodoGet(path: string) {
//   // OJO COMO ES UN DECORADOR DE METODO DEBE ESTABLECERSE 3 PARAMETROS
//   return function (
//     target: any, // retorn clase que se aplica
//     propertykey: string, // retorna nombre del metodo que se aplica
//     //descriptor: PropertyDescriptor,
//   ): any {
//     // con hasMetadata se puede verificar si la metadata tiene un key paths, que apunta al constructor de la clase
//     if (!Reflect.hasMetadata('paths', target.constructor)) {
//       // Si no existe, entonces establece la metada con el key, su valor y a donde apunta al constructor de la clase
//       Reflect.defineMetadata('paths', [], target.constructor);
//     }

//     // Se solicita la metadata establecida con el key paths
//     const paths = Reflect.getMetadata('paths', target.constructor);

//     // Se mete en el array de paths lo siguiente
//     paths.push({
//       path, //ruta pasada en el constructor
//       verb: 'get',
//       methodName: propertykey, // metodo el cual es aplicado en este caso se llama "list"
//     });

//     // Se define la la metadata con el key paths, su valor, y la clase a la cual sera aplicada
//     Reflect.defineMetadata('paths', paths, target.constructor);
//   };
// }

// // Reflect.defineMetadata es como (empresa de correo)
// // -> (data) es un sobre el cual debe llevar unos parametros asi como nombre, direccion, postal pero son (KEY, URL, constructor)
// // -> destinatario es la clase quien -> trabaja con lo recibido

// // decorador de factoria afecto a un contexto de clase
// function Controlador(path: string) {
//   // path sera la propiedad que el necesite recibir
//   return function (constructor: any) {
//     console.log('Controlador', path); // tiempo de compilación
//     //De esta forma se define una metadata
//     Reflect.defineMetadata('path', path, constructor); // IMPORTANTE esta metadata -> solamente es accesible cuando exista una instancia de clase que ocupa el decorador
//   };
// }

// @Controlador('/users') // se le define la ruta en la cual va a ejecutar o mostrar su funcion
// export class UsersController {
//   constructor() {
//     console.log('UsersController');
//   }

//   // decorador de metodo
//   @MetodoGet('/list') // propiedad que espera recibir el decorador, el cual sera la ruta
//   list() {
//     console.log('list');
//   }
// }

/*Cuando se utiliza el decorador @ApiExcludeController() en un controlador, este controlador y 
todas sus rutas asociadas no aparecerán en la documentación Swagger generada automáticamente. 
Esto es útil en los siguientes casos:
Controladores internos o administrativos: Si tienes controladores que no deberían 
ser accesibles públicamente o que están destinados solo para administración interna, 
es posible que desees ocultarlos de la documentación.*/

import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

import { AppService } from './app.service';

@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hola';
  }
}
