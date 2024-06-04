import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Module({
  providers: [
    // manera destructurada de de implementar los databaseProviders
    ...databaseProviders,
  ],
  exports: [...databaseProviders], //es para disponibilizar los proveedores a fuera del modulo para que otros modulos puedan importar el recurso apuntando a este archivo
})
export class DatabaseModule {}
