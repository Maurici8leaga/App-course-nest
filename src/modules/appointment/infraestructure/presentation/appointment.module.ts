import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppointmentCLCommandHandler } from '../../application/commands/appointment.cl.command';
import { AppointmentCOCommandHandler } from '../../application/commands/appointment.co.command';
import { AppointmentMXCommandHandler } from '../../application/commands/appointment.mx.command';
import { AppointmentController } from './appointment.controller';

const application = [
  AppointmentCLCommandHandler,
  AppointmentCOCommandHandler,
  AppointmentMXCommandHandler,
];

@Module({
  imports: [CqrsModule], // se coloca una vez instalado "@nestjs/cqrs"
  controllers: [AppointmentController],
  providers: [...application],
})
export class AppointmentModule {}
