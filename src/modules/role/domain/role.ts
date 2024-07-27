import { validate } from 'uuid';

export class Role {
  // DATO este archivo no se coloca dentro de una carpeta roots ya que solo tiene propiedades y los valores de las propiedades son string, y no son
  //   y no son valores personalizados como clases etc
  private readonly id: string;
  private readonly name: string;

  constructor(id: string, name: string) {
    // validaciones para asegurar que los valores cumplan con su estructura (MODELO DE NEGOCIO)
    if (!validate(id)) throw new Error('Invalidad id');
    if (name.length < 3) throw new Error('Invalidad name');

    this.id = id;
    this.name = name;
  }

  // metodo para hacer un get de las propiedades
  properties() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
