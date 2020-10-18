export type Constructor<T> = new (...args: any[]) => T;

export type Link = string;

export interface BaseGetListResponse<T> {
  count: number;
  next: Link;
  previous: Link;
  results: T[];
}
