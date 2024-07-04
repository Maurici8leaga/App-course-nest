import { UserEntity } from '../user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(UserEntity), // querys pre-fabricadas
    inject: ['DATA_SOURCE_MYSQL'], // aqui dentro debe ir el token que esta en database.providers
  },
  {
    provide: 'USER_MANAGER',
    useFactory: (dataSource) => dataSource.manager, // createQuery -> querys nativas (es mas para crear funcionalidades custom que no se encuentran en la opcion de arriba)
    inject: ['DATA_SOURCE_MYSQL'],
  },
];
