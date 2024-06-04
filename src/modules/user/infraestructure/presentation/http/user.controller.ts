import { Body, Controller, Post } from '@nestjs/common';

@Controller('users') // "users" sera la ruta al cual se le puede acceder a este controlador, ya esta incluye el '/'
export class UserController {
  @Post() // decorador para realizar solicitud post, no hace falta agregar ruta porque toma la de arriba
  async insert(@Body() body: any) {
    // el decorador @Body es para indicar que los datos se envian atraves del body
    return body;
  }
}
