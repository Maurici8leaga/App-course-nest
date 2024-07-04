import { UserEntity } from 'src/modules/user/infraestructure/user.entity';
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';

// role no puese ser un class tiene que ser una entidad por eso se crea este class
@Entity({ name: 'role' })
export class RoleEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @ManyToMany(() => UserEntity, (user) => user.roles)
  users: UserEntity[];
}
