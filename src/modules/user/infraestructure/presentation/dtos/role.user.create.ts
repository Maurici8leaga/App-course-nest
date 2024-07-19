import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

// este e sun ejemplo de un class validator de manera de tener un class abstraido para cada caso
export class Role {
  // decoradores para validaciones
  @IsNotEmpty() // decorador que obliga a que el campo sea obligatorio
  @IsString()
  //   a estos decoradores se le puede personalizar mensajes peor va a depender del decorador , para se coloca { message: '' }
  @IsUUID()
  id: string;

  @IsOptional() // se coloca opcional para que en el array de roles no tenga que ir el name solo con el id sea suficiente
  @IsString()
  @MinLength(3)
  name: string;
}
