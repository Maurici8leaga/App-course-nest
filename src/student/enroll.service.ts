import { Injectable } from '@nestjs/common';
// este se crea para poder mostrar como se pueden conectaar servicios dentro de servicios

@Injectable() // Este permite realizar dependency inyeccion de servicios mediante tokens en los contructores de las clases
export class EnrollService {
  enroll() {
    return 'enroll';
  }
}
