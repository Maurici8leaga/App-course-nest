import { ScheduleEntity } from '../entities/schedule.entity';

export const scheduleProviders = [
  {
    provide: 'SCHEDULE_REPOSITORY', // este es el key  que se usa en el schedule.infraestructure
    useFactory: (dataSource) => dataSource.getRepository(ScheduleEntity),
    inject: ['DATA_SOURCE_MYSQL'], // aqui dentro debe ir el token que esta en database.providers
  },
];
