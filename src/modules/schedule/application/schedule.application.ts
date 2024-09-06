import { Inject, Injectable } from '@nestjs/common';
import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { ScheduleInfraestructure } from '../infraestructure/schedule.infraestructure';
import { Schedule } from '../domain/roots/schedule';
import { PaginateResult } from 'src/core/domain/interfaces/paginate.interface';

@Injectable() // al pasarle a un class este decorador lo convierte directamente en un proveedor
export class ScheduleApplication {
  constructor(
    // nest.js solicita saber quien le dio vida al contrato por eso se coloca dentro del inject el ScheduleInfraestructure
    @Inject(ScheduleInfraestructure)
    private readonly repository: ScheduleRepository,
  ) {}

  async save(schedule: Schedule): Promise<Schedule> {
    return await this.repository.save(schedule);
  }

  async findById(id: string): Promise<Schedule> {
    return await this.repository.findById(id);
  }

  async findAll(): Promise<Schedule[]> {
    return await this.repository.findAll();
  }

  async findByPage(
    page: number,
    pageSize: number,
  ): Promise<PaginateResult<Schedule>> {
    return await this.repository.findByPage(page, pageSize);
  }
}
