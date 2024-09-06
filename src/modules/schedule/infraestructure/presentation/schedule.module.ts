import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DatabaseModule } from 'src/core/infraestructure/database/database.module';
import { ScheduleApplication } from '../../application/schedule.application';
import { ScheduleInfraestructure } from '../schedule.infraestructure';
import { scheduleProviders } from '../providers/schedule.providers';
import { ScheduleController } from './http/schedule.controller';

const infraestructure = [ScheduleInfraestructure];
const application = [ScheduleApplication]; // falta registrar otra cosa de application
// en "application" pueden ir todas las application que existan por ejemplo, create, edit, update etc dentro de ese array
const othersProviders = [...scheduleProviders];

@Module({
  imports: [DatabaseModule, CqrsModule],
  controllers: [ScheduleController],
  providers: [...infraestructure, ...application, ...othersProviders], //se usa es spread operator para incluir todos los que se encuentran dentro del documento
  // se coloca infra,  applications y othersProviders dentro para que pueda disponibilizarse en el modulo y pueda ser usado si no dara error
})
export class ScheduleModule {}
