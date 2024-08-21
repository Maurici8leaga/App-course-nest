import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CourseCreateDTO {
  // decoradores para validaciones
  // tambien se pueden crear Decoradores personalizados info aca; https://stackoverflow.com/questions/77485694/how-to-use-class-validator-decorator-optionally-in-nest-js-dto

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title: string;
}
