import { Inject, Injectable } from '@nestjs/common';
import { CourseRepository } from '../domain/repositories/course.repository';
import { CourseInfraestructure } from '../infraestructure/course.infraestructure';
import { Course } from '../domain/roots/course';
import { PaginateResult } from 'src/core/domain/interfaces/paginate.interface';

@Injectable() // al pasarle a un class este decorador lo convierte directamente en un proveedor si no dara error
export class CourseApplication {
  constructor(
    // nest.js solicita saber quien le dio vida al contrato por eso se coloca dentro del inject el CourseInfraestructure
    @Inject(CourseInfraestructure)
    private readonly repository: CourseRepository,
  ) {}

  async save(course: Course): Promise<Course> {
    return await this.repository.save(course);
  }

  async findById(id: string): Promise<Course> {
    return await this.repository.findById(id);
  }

  async findBySlug(slug: string): Promise<Course> {
    return await this.repository.findBySlug(slug);
  }

  async findAll(): Promise<Course[]> {
    return await this.repository.findAll();
  }

  async findByPage(
    page: number,
    pageSize: number,
  ): Promise<PaginateResult<Course>> {
    return await this.repository.findByPage(page, pageSize);
  }
}
