import { SetMetadata } from '@nestjs/common';

// estos se llaman Execution context de nest
//  https://docs.nestjs.com/fundamentals/execution-context

export enum RoleEnum {
  // este es un diccioario, estos en nest se llaman enum

  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleEnum[]) => SetMetadata(ROLES_KEY, roles);
