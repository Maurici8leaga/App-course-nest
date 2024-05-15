import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE_MYSQL',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql', // nombre  que se le data
        host: 'localhost',
        port: 3310,
        username: 'mchamorro', // credenciales
        password: '12345', // credenciales
        database: 'db',
        entities: [], // aqui debera ir todas las entidades que existan
        synchronize: true, // se usa solo para entorno de desarrollo
        logging: true, // dev
      });

      return dataSource.initialize();
    },
  },
];
