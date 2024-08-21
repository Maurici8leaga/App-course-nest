import { CourseEntity } from '../entities/course.entity';

export const courseProviders = [
  {
    provide: 'COURSE_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(CourseEntity), // querys pre-fabricadas
    inject: ['DATA_SOURCE_MYSQL'], // aqui dentro debe ir el token que esta en database.providers
  },
];
