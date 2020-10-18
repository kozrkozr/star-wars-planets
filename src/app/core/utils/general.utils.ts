import {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs/operators';

export const nonNil = <T>(val: T): boolean => val !== null && val !== undefined;
export const filterNonNil = <T>(): MonoTypeOperatorFunction<T> => filter<T>(nonNil);
