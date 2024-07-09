import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Role } from './role.user.create';
import { Address } from './address.user.create';

export class UserCreateDTO {
  // decoradores para validaciones
  // tambien se pueden crear Decoradores personalizados info aca; https://stackoverflow.com/questions/77485694/how-to-use-class-validator-decorator-optionally-in-nest-js-dto

  @IsNotEmpty() // decorador que obliga a que el campo sea obligatorio
  @IsString()
  @IsUUID() // para el caso que se use uuid tipo mongoose
  id: string;

  @IsNotEmpty({ message: 'No puede estar vacio' })
  //   a estos decoradores se le puede personalizar mensajes peor va a depender del decorador
  @IsString()
  @MinLength(3)
  fullname: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  /* Debe tener al menos una letra minúscula.
      Debe tener al menos una letra mayúscula.
      Debe tener al menos un dígito.
      Debe tener una longitud mínima de 8 caracteres.
      Solo puede contener letras (mayúsculas y minúsculas) y dígitos.
      Ejemplos
      Válido: Password1, Aa1bcdef, 1234Abcd
      No válido: password (no hay mayúsculas ni dígitos), PASSWORD1 (no hay minúsculas), Pass1 (menos de 8 caracteres).*/

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  password: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true }) // @ValidateNested. sirve validar tambien para validar objetos dentro de un array como el ejemplo de role y se le debe colocar el 'each: true" para que valide cada uno de las propiedades
  // @ValidateNested + @Type() se necesitan los 2 cuando es un caso el cual se crea un class el cual contiene validaciones
  // dentro entonces el validate nested permite validar las propiedades dentro del class y el @Type es para que el convierta
  // lo que tendra como valor y cumpla con el class pasado
  @Type(() => Role) // en este caso Role es un class validator
  roles: Role[];

  @IsOptional()
  @ValidateNested()
  // se repite lo mismo que arriba ya que Address es un class validator tambien
  @Type(() => Address)
  address: Address;
}
