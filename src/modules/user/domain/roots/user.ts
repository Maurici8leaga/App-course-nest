import { Role } from '../entities/role';
import { Address } from '../entities/address';
import {
  UserProperties,
  UserUpdateProperties,
} from './interfaces/user.interface';

export class User {
  private readonly id: string;
  private fullname: string;
  private image: string;
  private address: Address;
  private readonly email: string;
  private password: string;
  private refreshToken: string;
  private roles: Role[];
  private createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: UserProperties) {
    // props se encuentran es la interfaz que se encuentra las propiedades requeridas & opcionales

    // El metodo Object.assign permite crear un nuevo objeto con las propiedades del objeto del primer parametro que viene siendo las propiedades de
    // la clase User y el 2do parametro las propiedades que tiene el objeto 'props'
    Object.assign(this, props); // esto es funcional para cuando se tienen muchas propiedades que inicializar y ayuda a hacer un codigo mas limpio
    if (!props.createdAt) this.createdAt = new Date();

    // Validaciones para las reglas de negocio opcion 1: en el constructor
  }

  // métodos de clase
  properties() {
    //OJO ESPERAR POR DEFINIR
    return {
      id: this.id,
      fullname: this.fullname,
      email: this.email,
      image: this.image,
      address: this.address,
      password: this.password,
      refreshToken: this.refreshToken,
      roles: this.roles,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  // metodo para act el user y agregar fecha de act
  update(fieldsToUpdate: UserUpdateProperties) {
    Object.assign(this, fieldsToUpdate);
    this.updatedAt = new Date();
  }

  delete() {
    this.deletedAt = new Date();
  }

  // Validaciones para las reglas de negocio opcion 2: dentro de la especificación de un método directamente con las reglas
  //  Validaciones para las reglas de negocio opcion 3: entro de la especificación de un método pero que reciba cada VO asi ->

  /*static create(props: UserProperties): User {
    //IdVO.create(props.id);
    //RefreshTokenVO.create(props.refreshToken);
    // continuar con cada VO .........
    
    // return new User(props);
    /*if (props.id && props.id.length === 0) {
      throw new Error('Invalid id');
    }
    if (props.refreshToken && props.refreshToken) {
      throw new Error('Invalid refresh token');
    }
    if (props.fullname.length === 0) {
      throw new Error('Invalid fullname');
    }
    if (props.roles.length === 0) {
      throw new Error('Invalid roles');
    }
    if (
      !props.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    ) {
      throw new Error('Invalid email');
    }
    return new User(props);
  }*/
}
