import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreateDTO } from '../dtos/user.create.dto';
import { UserProperties } from 'src/modules/user/domain/roots/interfaces/user.interface';
import { UserFactory } from 'src/modules/user/domain/roots/user.factory';
import { UserCreate } from 'src/modules/user/application/user.create';
import { UserGetOneDTO } from '../dtos/user.get.one.dto';
import { UserGetOne } from 'src/modules/user/application/user.get.one';
import { UserList } from 'src/modules/user/application/user.list';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User') // este decorador para swagger agrupa en una categoria todos los del servicio con el nombre colocado dentro
// lo que va aca es lo que va a recibir el front o solicitar el front que consumira este backend
@Controller('users') // "users" sera la ruta al cual se le puede acceder a este controlador, ya esta incluye el '/'
export class UserController {
  constructor(
    private readonly userCreate: UserCreate,
    private readonly userGetOne: UserGetOne,
    private readonly userList: UserList,
  ) {}

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

  @Get() // decorador para realizar solicitud de get
  async list() {
    const users = await this.userList.getList();
    return users;
  }

  @Get('/:id') // decorador para obtener los user by id
  async getOne(@Param() params: UserGetOneDTO) {
    // para trabajar con parametros se debe usar el decorador @Param
    const { id } = params;
    const user = await this.userGetOne.getOne(id);
    // pendiente
    return user;
  }
}
