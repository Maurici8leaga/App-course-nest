// este es un ejemplo de un archivo que pertenece al bounding context
export class Role {
  readonly id: string;
  // se coloca readonly para que no pueda ser modificado

  constructor(id: string) {
    this.id = id;
  }
}
