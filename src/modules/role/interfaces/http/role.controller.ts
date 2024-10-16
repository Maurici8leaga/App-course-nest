import { Controller, Get } from '@nestjs/common';
import { RoleList } from '../../application/role-list';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Role') // este decorador para swagger agrupa en una categoria todos los del servicio con el nombre colocado dentro
// lo que va aca es lo que va a recibir el front o solicitar el front que consumira este backend
@Controller('roles') // roles sera la ruta padre
export class RoleController {
  constructor(private readonly roleList: RoleList) {}

  @Get() // metodo para obtener la lista de roles existentes
  async list() {
    const result = await this.roleList.list();
    return result;
  }
}
