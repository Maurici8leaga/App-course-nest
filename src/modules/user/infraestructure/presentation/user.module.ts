import { Module } from '@nestjs/common';
import { UserController } from './http/user.controller';
import { DatabaseModule } from 'src/core/infraestructure/database/database.module';
import { userProviders } from '../providers/user.provider';
import { UserCreate } from '../../application/user-create';
import { UserInfraestructure } from '../user.infraestructure';

const applications = [UserCreate]; //pueden ir todas las application que existan por ejemplo, create, edit, update etc dentro de ese array
const infra = [UserInfraestructure];

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, ...applications, ...infra], //se usa es spread operator para incluir todos los que se encuentran dentro del documento
  // se coloca infra y applications dentro para que pueda disponibilizarse en el modulo y pueda ser usado si no dara error
})
export class UserModule {}
