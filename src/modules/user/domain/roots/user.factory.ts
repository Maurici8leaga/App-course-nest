// factory con las reglas de negocio de User
import { EmailVO } from '../value-objects/email.vo';
import { FullnameVO } from '../value-objects/fullname.vo';
import { IdVO } from '../value-objects/id.vo';
import { RefreshTokenVO } from '../value-objects/refresh-token';
import { RolesVO } from '../value-objects/roles.vo';
import { User } from './user';
import { UserProperties } from './interfaces/user.interface';

// aqui se usa el patron Abstract Factory https://refactoring.guru/design-patterns/abstract-factory

// fábrica con las reglas de negocio de User  para desacoplar las reglas de denogico
export class UserFactory {
  static create(props: UserProperties) {
    // de estaa formaa se implementan los VO abstraidos con sus metodos

    // de esta forma se quita peso y codigo al user.ts con las validaaciones
    IdVO.create(props.id);
    RefreshTokenVO.create(props.refreshToken);
    RolesVO.create(props.roles);
    FullnameVO.create(props.fullname);
    EmailVO.create(props.email);

    return new User(props);
  }
}
