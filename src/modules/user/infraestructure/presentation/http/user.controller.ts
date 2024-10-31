import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserCreateDTO } from '../dtos/user.create.dto';
import { UserProperties } from 'src/modules/user/domain/roots/interfaces/user.interface';
import { UserFactory } from 'src/modules/user/domain/roots/user.factory';
import { UserCreate } from 'src/modules/user/application/user.create';
import { UserGetOneDTO } from '../dtos/user.get.one.dto';
import { UserGetOne } from 'src/modules/user/application/user.get.one';
import { UserList } from 'src/modules/user/application/user.list';
import { ApiTags } from '@nestjs/swagger';
import { Crypt } from 'src/core/infraestructure/presentation/services/crypt.service';
import { AuthenticationGuard } from '../../../../../core/infraestructure/presentation/guards/authentication.guard';
import { AuthorizationGuard } from '../../../../../core/infraestructure/presentation/guards/authorization.guard';
import {
  Roles,
  RoleEnum,
} from '../../../../../core/infraestructure/presentation/decorators/roles';

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
    // funcion para encriptar el password al hacer el post
    const userProperties: UserProperties = {
      ...body,
      password: await Crypt.encript(body.password),
    };
    const user = UserFactory.create(userProperties);

    const userSaved = await this.userCreate.save(user);

    return userSaved;
  }

  @Get() // decorador para realizar solicitud de get
  @Roles(RoleEnum.STUDENT, RoleEnum.TEACHER) // este decorador de Roles viene de la carpeta roles de decorators
  @UseGuards(AuthenticationGuard, AuthorizationGuard) // estos vienen siendo loss middlewares, uno para autenticacion del usuario y otro si el usuario esta autorizado para obtener info
  // los guards son los encargados de la seguridad de los endpoits
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
