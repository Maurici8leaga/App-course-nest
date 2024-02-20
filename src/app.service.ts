import { Injectable } from '@nestjs/common';

// Permite Registrar una clase como un Provider
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'; //Este sera el mensaje a mostrar en la ruta cuanto sea llamado este service
  }
}
