import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { RoleEntity } from 'src/modules/role/infraestructure/entities/role.entity';

@Entity({ name: 'user' }) // este sera el nombre que sera reconocido atraves de la db, OJO no es igual que el de la clase
export class UserEntity {
  // @PrimaryColum y @Column es para crear la tabla de sql son decaradores para eso, varia en algunos casos segun la db que se este implementando.

  @PrimaryColumn({ type: 'varchar', length: 36, nullable: false })
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  fullname: string;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  image: string;

  @Column({ type: 'json', nullable: false })
  address: object;

  @Column({ type: 'varchar', length: 100, nullable: false })
  refreshToken: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: true })
  updatedAt: Date;

  @Column({ type: 'datetime', nullable: true })
  deletedAt: Date;

  @ManyToMany(() => RoleEntity, (role) => role.users, { eager: true }) // eager es para traer todo lo que tengaa la coleccion de la db si es lazy que este esta config por default trae pocos de la collecion
  @JoinTable() // table dominante de la relación
  roles: RoleEntity[];
}
