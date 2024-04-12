import { UserProperties } from './interfaces/user.interface';

export class User {
  private readonly id: string;
  private fullname: string;
  private image: string;
  private readonly email: string;
  private password: string;
  private refreshToken: string;
  private roles: any[]; // cambiar al tipo adecuado
  private createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: UserProperties) {
    // props se encuentran es la interfaz que se encuentra las propiedades requeridas & opcionales

    // El metodo Object.assign permite crear un nuevo objeto con las propiedades del objeto del primer parametro que viene siendo las propiedades de
    // la clase User y el 2do parametro las propiedades que tiene el objeto 'props'
    Object.assign(this, props); // esto es funcional para cuando se tienen muchas propiedades que inicializar y ayuda a hacer un codigo mas limpio
    this.createdAt = new Date();
  }

  // métodos de clase
}
