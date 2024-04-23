// EJMPLO de un value object para la propiedad name
import { validate } from 'uuid';

export class IdVO {
  // por convencion el nobre de una class dentro un file 'vo' se coloca al final del nombre VO

  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  // especificación de creación mediante reglas
  static create(value: string): IdVO {
    if (value && (value.length === 0 || !validate(value))) {
      // con una validacion para esta propiedadz

      throw new Error('Invalid id');
    }
    return new IdVO(value);
  }
}
