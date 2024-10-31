import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthenticationGuard implements CanActivate {
  // para que se convierta en un guard tiene que implementarse CanActivate
  // mas info https://escalabtech.sharepoint.com/:u:/r/sites/NodeAvanzadoV2/Documentos%20compartidos/General/Clase%2021%20-%20Nest.js/Guards.url?csf=1&web=1&e=B0DzmD

  // por implementar
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
