import { ScheduleEntity } from 'src/modules/schedule/infraestructure/entities/schedule.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'course' }) // este sera el nombre que sera reconocido atraves de la db, OJO no es igual que el de la clase
export class CourseEntity {
  // @PrimaryColum y @Column es para crear la tabla de sql son decaradores para eso, varia en algunos casos segun la db que se este implementando.

  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  slug: string;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date | undefined;

  @Column({ type: 'boolean' })
  isDeleted: boolean;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.course)
  schedules: ScheduleEntity[];
}
