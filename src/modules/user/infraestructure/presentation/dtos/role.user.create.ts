import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

// este e sun ejemplo de un class validator de manera de tener un class abstraido para cada caso
export class Role {
  // decoradores para validaciones
  @IsNotEmpty() // decorador que obliga a que el campo sea obligatorio
  @IsString()
  //   a estos decoradores se le puede personalizar mensajes peor va a depender del decorador , para se coloca { message: '' }
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}
