import { Role } from '../../domain/role';
import { RoleEntity } from '../entities/role.entity';

export class RoleDto {
  static fromDataToDomain(data: RoleEntity | RoleEntity[]): Role | Role[] {
    // metodo que devolvera de data al dominio
    if (Array.isArray(data)) {
      return data.map((_) => RoleDto.fromDataToDomain(_)) as Role[];
      //   el "_" se usa para referirse a un elemento elemento pero no darle nombre
    } else {
      const { id, name } = data;
      return new Role(id, name);
    }
  }
}
