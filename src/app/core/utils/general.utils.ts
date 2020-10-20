import {MonoTypeOperatorFunction, Observable, OperatorFunction} from 'rxjs';
import {filter} from 'rxjs/operators';

export const nonNil = <T>(val: T): boolean => val !== null && val !== undefined;
export const filterNonNil = <T>(): MonoTypeOperatorFunction<T> => filter<T>(nonNil);
export const addPipeIf = <T>(
  condition: boolean,
  pipe: MonoTypeOperatorFunction<T>,
): OperatorFunction<T, T> => (source: Observable<T>): Observable<T> =>
  condition ? source.pipe(pipe) : source;
