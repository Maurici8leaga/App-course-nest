import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDTO } from '../dtos/user.create.dto';
import { UserProperties } from 'src/modules/user/domain/roots/interfaces/user.interface';
import { UserFactory } from 'src/modules/user/domain/roots/user.factory';
import { UserCreate } from 'src/modules/user/application/user-create';

// lo que va aca es lo que va a recibir el front o solicitar el front que consumira este backend
@Controller('users') // "users" sera la ruta al cual se le puede acceder a este controlador, ya esta incluye el '/'
export class UserController {
  constructor(private readonly userCreate: UserCreate) {}

  @Post() // decorador para realizar solicitud post, no hace falta agregar ruta porque toma la de arriba
  async insert(@Body() body: UserCreateDTO) {
    const userProperties: UserProperties = body;

    // paso importante: validas el negocio OJO ES IMPORTANTE QUE SE VALIDE 2 VECES porque se usa DDD, una se valida en el dto
    // el otro se valida en el UserFactory
    const user = UserFactory.create(userProperties);

    // validar el proceso http
    await this.userCreate.save(user);

    // el decorador @Body es para indicar que los datos se envian atraves del body
    return body;
  }
}
