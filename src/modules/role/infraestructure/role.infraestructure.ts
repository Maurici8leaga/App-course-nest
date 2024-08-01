import { Repository } from 'typeorm';
import { Role } from '../domain/role';
import { RoleEntity } from './entities/role.entity';
import { Inject, Injectable } from '@nestjs/common';
import { RoleDto } from './dtos/role.dto';
import { RoleRepository } from '../domain/repositories/role.repository';

@Injectable() // este decorador puede ser opcional ya que en role.module se coloca el mismo decorador y al hacer esto
// dentro de un class lo convierte en un proveedor
export class RoleInfraestructure implements RoleRepository {
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
