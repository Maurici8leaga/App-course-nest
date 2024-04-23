// EJMPLO de un value object para la propiedad Email

export class EmailVO {
  // por convencion el nobre de una class dentro un file 'vo' se coloca al final del nombre VO
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  // especificación de creación mediante reglas
  static create(value: string): EmailVO {
    if (!value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
      // con una validacion para esta propiedadz
      throw new Error('Invalid email address');
    }
    return new EmailVO(value);
  }
}
