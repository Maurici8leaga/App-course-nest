import { Body, Controller, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { ScheduleApplication } from 'src/modules/schedule/application/schedule.application';
import { ScheduleCreateDto } from '../dtos/schedule-create.dto';
import { Schedule, ScheduleProps } from '../../../domain/roots/schedule';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Schedule') // este decorador para swagger agrupa en una categoria todos los del servicio con el nombre colocado dentro
// lo que va aca es lo que va a recibir el front o solicitar el front que consumira este backend
@Controller('schedules') // buena practica colocar el nombre en plural
export class ScheduleController {
  constructor(private readonly application: ScheduleApplication) {}

  @Post()
  async insert(@Body() body: ScheduleCreateDto) {
    const props = {
      id: uuidv4(),
      ...body,
    };
    const schedule = new Schedule(props as ScheduleProps);
    const scheduleCreated = await this.application.save(schedule);

    return scheduleCreated;
  }
}
