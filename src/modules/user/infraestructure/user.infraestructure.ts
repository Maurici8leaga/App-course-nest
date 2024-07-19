import { Repository } from 'typeorm';
import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/roots/user';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './user.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable() // se coloca este decorador como ref ya que nest pide que se coloque este donde esta el orig de la log que se aplica en user-create
//export class UserInfraestructure implements UserRepository
export class UserInfraestructure implements UserRepository {
  // implements UserRepository es para que tenga la estructura declarada en UserRepository
  constructor(
    // aca se implementa patron de dependencia
    @Inject('USER_REPOSITORY') // este key debe ser el mismo que se coloco en user.provider del modulo
    private readonly repository: Repository<UserEntity>,
  ) {}

  async save(user: User): Promise<User> {
    const userEntity = UserDto.fromDomainToData(user) as UserEntity;
    await this.repository.save(userEntity);
    return user;
  }

  findByEmail(email: string): Promise<User> {
    throw new Error('Method Not implemented');
  }

  findByRefreshToken(refreshToken: string): Promise<User> {
    throw new Error('Method Not implemented');
  }

  findById(id: string): Promise<User> {
    throw new Error('Method Not implemented');
  }

  list(): Promise<User[]> {
    throw new Error('Method Not implemented');
  }

  listByPage(page: number, pageSize: number): Promise<User[]> {
    throw new Error('Method Not implemented');
  }

  delete() {
    throw new Error('Method Not implemented');
  }
}
