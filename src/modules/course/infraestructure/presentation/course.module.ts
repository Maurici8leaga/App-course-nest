import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/infraestructure/database/database.module';
import { CourseInfraestructure } from '../course.infraestructure';
import { CourseApplication } from '../../application/course.application';
import { courseProviders } from '../providers/course.provider';
import { CourseService } from '../../application/services/course.service';
import { CourseController } from './course.controller';

const infraestructure = [CourseInfraestructure];
const application = [CourseApplication]; //pueden ir todas las application que existan por ejemplo, create, edit, update etc dentro de ese array
const othersProviders = [...courseProviders, CourseService];

@Module({
  imports: [DatabaseModule],
  controllers: [CourseController],
  providers: [...infraestructure, ...application, ...othersProviders], //se usa es spread operator para incluir todos los que se encuentran dentro del documento
  // se coloca infra,  applications y othersProviders dentro para que pueda disponibilizarse en el modulo y pueda ser usado si no dara error
})
export class CourseModule {}
