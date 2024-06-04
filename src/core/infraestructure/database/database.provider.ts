import { UserEntity } from 'src/modules/user/infraestructure/user.entity';
import { DataSource } from 'typeorm';

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
        entities: [UserEntity], // aqui debera ir todas las entidades que existan
        synchronize: true, // se usa solo para entorno de desarrollo
        logging: true, // dev
      });

      return dataSource.initialize(); // devuelve la instancia de la bdd a partir del token
    },
  },
];
