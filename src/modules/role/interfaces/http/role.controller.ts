import { Controller, Get } from '@nestjs/common';
import { RoleList } from '../../application/role-list';

@Controller('roles') // roles sera la ruta padre
export class RoleController {
  constructor(private readonly roleList: RoleList) {}

  @Get() // metodo para obtener la lista de roles existentes
  async list() {
    const result = await this.roleList.list();
    return result;
  }
}
