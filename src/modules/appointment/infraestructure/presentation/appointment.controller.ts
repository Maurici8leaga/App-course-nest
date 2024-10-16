import { Body, Controller, Post } from '@nestjs/common';
import { AppointmentCLCommand } from '../../application/commands/appointment.cl.command';
import { AppointmentCOCommand } from '../../application/commands/appointment.co.command';
import { AppointmentMXCommand } from '../../application/commands/appointment.mx.command';
import { CommandBus } from '@nestjs/cqrs';
import { AppointmentCreateDTO } from './dtos/appointment.create.dto';
import { ApiTags } from '@nestjs/swagger';

const countryCommands = {
  CL: AppointmentCLCommand,
  CO: AppointmentCOCommand,
  MX: AppointmentMXCommand,
};

@ApiTags('Appointment') // este decorador para swagger agrupa en una categoria todos los del servicio con el nombre colocado dentro
// lo que va aca es lo que va a recibir el front o solicitar el front que consumira este backend

@Controller('appointments')
export class AppointmentController {
  // recibes una dy
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createAppointment(@Body() appointment: AppointmentCreateDTO) {
    // recibir el código del país para saber a que lógica (handler) debe derivarlo
    const appointmentCommand = new countryCommands[appointment.countryIso]();
    // armamos un objeto con el código del país y los datos
    Object.assign(appointmentCommand, appointment);

    // el command bus una vez tiene preparado los datos deriva la ejecución del comando al handler respectivo de acuerdo al código recibido
    const idReturned = await this.commandBus.execute(appointmentCommand);

    return { idReturned };
  }
}
