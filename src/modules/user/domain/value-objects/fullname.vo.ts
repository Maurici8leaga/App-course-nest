// EJMPLO de un value object para la propiedad name

export class FullnameVO {
  // por convencion el nobre de una class dentro un file 'vo' se coloca al final del nombre VO

  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  // especificación de creación mediante reglas
  static create(value: string): FullnameVO {
    if (value.length === 0) throw new Error('Invalid Fullname');
    // con una validacion para esta propiedadz

    return new FullnameVO(value);
  }
}
