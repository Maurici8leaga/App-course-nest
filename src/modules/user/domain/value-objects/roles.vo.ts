import { Role } from '../entities/role';

export class RolesVO {
  // por convencion el nobre de una class dentro un file 'vo' se coloca al final del nombre VO

  private readonly value: Role[];

  private constructor(value: Role[]) {
    this.value = value;
  }

  // especificación de creación mediante reglas
  static create(value: Role[]): RolesVO {
    if (value.length === 0) throw new Error('Invalid roles');
    // con una validacion para esta propiedadz

    return new RolesVO(value);
  }
}
