import { Role } from '../../entities/role';
import { Address } from '../../entities/address';

// interface con propiedades estrictas
export interface UserEssentials {
  readonly fullname: string;
  readonly image: string;
  readonly email: string;
  readonly password: string;
  readonly refreshToken: string;
  readonly roles: Role[];
}

// interface con propiedades opcionales
export interface UserOptionals {
  readonly id: string;
  readonly address: Address;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
}

export type UserProperties = UserEssentials & Partial<UserOptionals>;
// Partial<> permite crear un nuevo type en este caaso "UserProperties" con propiedades opciones de type "UserOptionals"
// entonces UserProperties podra tener propiedes del interfaace UserEssentials + si el usuario lo desea UserOptionals

export type UserUpdateProperties = Partial<
  Omit<UserEssentials, 'refreshToken'> &
    Omit<UserOptionals, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
>;
// El constructor Omit <> permite tomar todas las propiedades de la interface o typo que le pase (1er parametro)
// y omitira las propiedades que se le pase (2do parametro), DATO si se desea agregar mas de una se debe separar con los pipes |
