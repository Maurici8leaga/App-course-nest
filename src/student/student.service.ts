import { Inject, Injectable } from '@nestjs/common';
import { EnrollService } from './enroll.service';

@Injectable() // Este permite realizar dependency inyeccion de servicios mediante tokens en los contructores de las clases
export class StudentService {
  // PENDIENTE COMPORTAAMIENTO

  constructor(
    // 'CONFIG4' es el key del service, Y serverOAuth2 es el value pasado en el service
    @Inject('CONFIG4') private readonly config: { serverOAuth2: string },
    private readonly enrollService: EnrollService,
  ) {}

  getAll() {
    return Promise.resolve([
      'students1',
      'students2',
      'students3',
      this.config.serverOAuth2, // mostrara el value que tiene el serverOAuth2
      this.enrollService.enroll(), // metodo que esta dentro del servicio EnrollService
    ]);
  }
}
