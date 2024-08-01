import { Inject, Injectable } from '@nestjs/common';
import { RoleRepository } from '../domain/repositories/role.repository';
import { RoleInfraestructure } from '../infraestructure/role.infraestructure';

@Injectable() // al pasarle a un class este decorador lo convierte directamente en un proveedor
export class RoleList {
  constructor(
    // nest.js solicita saber quien le dio vida al contrato por eso se coloca dentro del inject el RoleInfraestructure
    @Inject(RoleInfraestructure)
    private readonly roleRepository: RoleRepository,
  ) {}

  async list() {
    const roleInserted = await this.roleRepository.list();
    return roleInserted;
  }
}
