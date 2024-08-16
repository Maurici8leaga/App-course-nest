import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class AppointmentCreateDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  patientId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  doctorId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  specialtyId: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  centerId: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date) // el @Type aca permite validar el date a tipo Class Date para que pueda tener propiedades de la Class Date , si no dara error
  date: Date;

  @IsNotEmpty()
  @IsString()
  @IsEnum(['CL', 'CO', 'MX']) // isEnum sirve para crear una lista de los posibles valores que podra tener este campo
  countryIso: string;
}
