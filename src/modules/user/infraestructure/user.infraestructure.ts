import { User } from '../domain/roots/user';
import { UserDto } from './dtos/user.dto';

//export class UserInfraestructure implements UserRepository
export class UserInfraestructure {
  save(user: User): Promise<void> {
    const userEntity = UserDto.fromDomainToData(user);
    throw new Error(`Implementation fake`);
  }

  findByEmail() {
    //
  }

  findByRefreshToken() {
    //
  }

  findById() {
    //
  }

  list() {
    //
  }

  listByPage() {
    //
  }

  delete() {
    //
  }
}
