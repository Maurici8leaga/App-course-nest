import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

// dto para la capa de presentación http
export class UserGetOneDTO {
  @IsNotEmpty() // decorador que obliga a que el campo sea obligatorio
  @IsString()
  @IsUUID() // para el caso que se use uuid tipo mongoose
  id: string;
}
