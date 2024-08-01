import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserInfraestructure } from '../infraestructure/user.infraestructure';
import { UserResponseDTO } from './dtos/user.reponse.dto';

@Injectable() // al pasarle a un class este decorador lo convierte directamente en un proveedor
export class UserList {
  constructor(
    // nest.js solicita saber quien le dio vida al contrato por eso se coloca dentro del inject el UserInfraestructure
    @Inject(UserInfraestructure)
    private readonly repository: UserRepository,
  ) {}

  async getList() {
    const users = await this.repository.list();
    const response = UserResponseDTO.fromDomainToResponse(users);
    return response;
  }
}
