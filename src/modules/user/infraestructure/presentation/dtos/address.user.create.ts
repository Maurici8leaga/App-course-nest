import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

// este e sun ejemplo de un class validator de manera de tener un class abstraido para cada caso
export class Address {
  // decoradores para validaciones
  @IsNotEmpty() // decorador que obliga a que el campo sea obligatorio
  @IsString()
  //   a estos decoradores se le puede personalizar mensajes peor va a depender del decorador , para se coloca { message: '' }
  @MinLength(3)
  street: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Type(() => Number) // el @Type aca permite validar el number a tipo Class number para que pueda tener propiedades de la Class Number
  number: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  city: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  country: string;
}
