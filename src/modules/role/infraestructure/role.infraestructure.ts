import { Repository } from 'typeorm';
import { Role } from '../domain/role';
import { RoleEntity } from './entities/role.entity';
import { Inject } from '@nestjs/common';
import { RoleDto } from './dtos/role.dto';

export class RoleInfraestructure implements RoleInfraestructure {
  // se usa implemenst RoleInfraestructure por patron facade ?
  constructor(
    // aca se implementa patron de dependencia
    @Inject('ROLE_REPOSITORY') // este key debe ser el mismo que se coloco en role.provider del modulo
    private readonly repository: Repository<RoleEntity>,
  ) {}

  async list(): Promise<Role[]> {
    const result = await this.repository.find();
    return RoleDto.fromDataToDomain(result) as Role[];
  }
}
