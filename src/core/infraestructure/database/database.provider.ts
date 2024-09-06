import { UserEntity } from 'src/modules/user/infraestructure/user.entity';
import { RoleEntity } from 'src/modules/role/infraestructure/entities/role.entity';
import { DataSource } from 'typeorm';
import { CourseEntity } from 'src/modules/course/infraestructure/entities/course.entity';
import { ScheduleEntity } from 'src/modules/schedule/infraestructure/entities/schedule.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE_MYSQL',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql', // nombre  que se le data
        host: 'localhost',
        port: 3310, // este tiene que ser el mismo que se coloca en el compose en ports
        username: 'mchamorro', // credenciales
        password: '12345', // credenciales
        database: 'db',
        entities: [UserEntity, RoleEntity, CourseEntity, ScheduleEntity], // aqui debera ir todas las entidades que existan
        synchronize: true, // se usa solo para entorno de desarrollo
        logging: true, // dev
      });

      console.log('Database connected');
      return dataSource.initialize(); // devuelve la instancia de la bdd a partir del token
    },
  },
  {
    provide: 'DATA_SOURCE_MONGO',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        host: 'localhost',
        //url: 'mongodb://root:12345@localhost/db?authSource=admin' // opcion mas corta que incluye host + port + username + password + database +authSource
        port: 27017,
        username: 'root',
        password: '12345',
        database: 'db',
        authSource: 'admin',
        entities: [],
        synchronize: true, // dev
        logging: true, // dev
      });

      return dataSource.initialize(); // devuelve la instancia del mongo server
    },
  },
];
