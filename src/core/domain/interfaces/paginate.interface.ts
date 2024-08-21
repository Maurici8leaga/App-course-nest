export interface PaginateResult<T> {
  // de esta forma se crea una interface de tipo GLOBAL
  total: number;
  data: T[];
}
