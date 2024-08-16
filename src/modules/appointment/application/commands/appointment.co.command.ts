import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { Appointment } from '../../domain/appointment';

// HANDLERS DEL PATRON CQRS

// Paso 1: Definir la estructura del comando: preparo los dato
export class AppointmentCOCommand implements ICommand {
  patientId: string;
  doctorId: string;
  specialtyId: string;
  centerId: number;
  date: Date;
}

// Manejador del comando
@CommandHandler(AppointmentCOCommand) // este decorador es para identificar que este meytodo sera para un comando en especifico
// mas info; https://docs.nestjs.com/recipes/cqrs
// @CommandHandler de CQLRS
// importante que lleve el nombre Handler para poder identificarlo
export class AppointmentCOCommandHandler
  implements ICommandHandler<AppointmentCOCommand>
{
  // los handlers obligatoriamente deben llevar el metodo asyncrono de execute
  execute(command: AppointmentCOCommand): Promise<any> {
    console.log('AppoinmentCOCommandHandler', command);

    const { patientId, doctorId, specialtyId, centerId, date } = command;

    const appointment = new Appointment(
      patientId,
      doctorId,
      specialtyId,
      date,
      centerId,
      'CO',
    );

    // nos devuelva el appoinment x su id
    return Promise.resolve(appointment.properties.id);
  }
}
