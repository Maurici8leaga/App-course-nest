// aca va a la representacion de exposicion del modulo
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/infraestructure/database/database.module';
import { RoleController } from './http/role.controller';
import { roleProviders } from '../infraestructure/providers/role.provider';
import { RoleList } from '../application/role-list';
import { RoleInfraestructure } from '../infraestructure/role.infraestructure';

const applications = [RoleList]; //pueden ir todas las application que existan por ejemplo, create, edit, update etc dentro de ese array
const infra = [RoleInfraestructure];

@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [...roleProviders, ...applications, ...infra], //se usa es spread operator para incluir todos los que se encuentran dentro del documento
  // se coloca infra y applications dentro para que pueda disponibilizarse en el modulo y pueda ser usado si no dara error
})
export class RoleModule {}
