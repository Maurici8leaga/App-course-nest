import { Controller, Get, Inject } from '@nestjs/common';
import { StudentService } from './student.service';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Student') // este decorador para swagger agrupa en una categoria todos los del servicio con el nombre colocado dentro
// lo que va aca es lo que va a recibir el front o solicitar el front que consumira este backend

@Controller('students') // el decorador Controller responde a los llamados HTTP segun la ruta que se le coloque, y retornando cierta info
// esto es equivalente a  app.use("/students", StudentController), así sería en express
export class StudentController {
  constructor(
    // 'STUDENT' es el key del service asi aplica con el resto
    @Inject('STUDENT') private readonly studentService: StudentService,
    @Inject('CONFIG') private readonly config: { url: string }, //url es el value asociado al servicio
    @Inject('CONFIG2') private readonly config2: { url: string }, //este url es lo que retorna la funcion del servicio factory
    @Inject('CONFIG3')
    private readonly config3: { url: string; urlConfig: string }, // 2 value que retorna la funcion del servicio factory
  ) {}

  @Get('/') // Get enruta las solicitudes de tipo GET a la ruta especificada adentro
  async getAll() {
    const students = await this.studentService.getAll(); // llamando al metodo del servicio de studentService

    // esto devuelve lo del enroll + studentService
    return [
      ...students,
      this.config.url,
      this.config2.url,
      this.config3.url,
      this.config3.urlConfig, // OJO aca como resultado esta siendo sobre escrito por el inject del service
    ];
  }
}
