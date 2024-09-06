import { CourseEntity } from 'src/modules/course/infraestructure/entities/course.entity';
import {
  FREQUENCY,
  Schedule,
  ScheduleProps,
  STATUS_SCHEDULE,
  TYPE_COURSE,
} from '../../domain/roots/schedule';
import { ScheduleEntity } from '../entities/schedule.entity';
import { plainToInstance } from 'class-transformer';
import { PaginateResult } from 'src/core/domain/interfaces/paginate.interface';

export class ScheduleDTO {
  static fromDomainToData(schedule: Schedule): ScheduleEntity {
    const courseEntity = new CourseEntity();

    courseEntity.id = schedule.properties.id;

    const data = { ...schedule.properties, course: courseEntity };

    const scheduleEntity = plainToInstance(ScheduleEntity, data);
    // "plainToInstance" Este método transforma el objeto de su clase en una nueva instancia del objeto de clase

    return scheduleEntity;
  }

  static fromDataToDomain(
    scheduleEntity: ScheduleEntity | ScheduleEntity[],
  ): Schedule | Schedule[] {
    if (Array.isArray(scheduleEntity)) {
      return scheduleEntity.map(
        (schedule) => this.fromDataToDomain(schedule) as Schedule,
      );
    }

    const props: ScheduleProps = {
      id: scheduleEntity.id,
      title: scheduleEntity.title,
      type: TYPE_COURSE[scheduleEntity.type],
      summary: scheduleEntity.summary,
      slogan: scheduleEntity.slogan,
      prices: scheduleEntity.prices,
      dateStart: scheduleEntity.dateStart,
      hourStart: scheduleEntity.hourStart,
      hourEnd: scheduleEntity.hourEnd,
      duration: scheduleEntity.duration,
      frequency: FREQUENCY[scheduleEntity.frequency],
      status: STATUS_SCHEDULE[scheduleEntity.status],
      whatLearn: scheduleEntity.whatLearn,
      requirements: scheduleEntity.requirements,
      content: scheduleEntity.content,
      createdAt: scheduleEntity.createdAt,
      updatedAt: scheduleEntity.updatedAt,
      deletedAt: scheduleEntity.deletedAt,
      courseId: scheduleEntity.course.id,
      // pendiente para más adelante
    };

    const schedule = new Schedule(props);

    return schedule;
  }

  static fromDataToDomainPaginate(
    schedules: ScheduleEntity[],
    total: number,
  ): PaginateResult<Schedule> {
    return {
      total,
      data: this.fromDataToDomain(schedules) as Schedule[],
    };
  }
}
