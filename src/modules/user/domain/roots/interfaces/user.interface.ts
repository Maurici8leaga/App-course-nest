// interface con propiedades estrictas
export interface UserEssentials {
  readonly fullname: string;
  readonly image: string;
  readonly email: string;
  readonly password: string;
  readonly refreshToken: string;
  readonly roles: any[];
}

// interface con propiedades opcionales
export interface UserOptionals {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
}

export type UserProperties = UserEssentials & Partial<UserOptionals>;
// Partial<> permite crear un nuevo type en este caaso "UserProperties" con propiedades opciones de type "UserOptionals"
// entonces UserProperties podra tener propiedes del interfaace UserEssentials + si el usuario lo desea UserOptionals
