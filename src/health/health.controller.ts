import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController, ApiExcludeEndpoint } from '@nestjs/swagger';

@ApiExcludeController() // esto es para que no se documente en swagger y solo quede internamente los logs
@Controller('health') // esta es la unica ruta que puede quedar en singular
export class HealthController {
  @Get() // metodo para obtener como respuesta si el servidor esta ok
  health(): string {
    return 'ok'; // mensaje a devolver
  }

  /*@ApiExcludeEndpoint() // esto es para un solo método y es para que sea excluida del controlador
  @Get()
  health2(): string {
    return 'ok';
  }*/
}
