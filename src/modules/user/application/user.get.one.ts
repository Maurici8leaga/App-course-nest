import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserInfraestructure } from '../infraestructure/user.infraestructure';
import { UserResponseDTO } from './dtos/user.reponse.dto';

@Injectable() // al pasarle a un class este decorador lo convierte directamente en un proveedor
export class UserGetOne {
  constructor(
    // nest.js solicita saber quien le dio vida al contrato por eso se coloca dentro del inject el UserInfraestructure
    @Inject(UserInfraestructure)
    private readonly repository: UserRepository,
  ) {}

  async getOne(id: string) {
    const userFound = await this.repository.findById(id);
    const response = UserResponseDTO.fromDomainToResponse(userFound);
    return response;
  }
}
