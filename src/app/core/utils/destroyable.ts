import {Constructor} from '@app/core/types';
import {MonoTypeOperatorFunction, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {OnDestroy} from '@angular/core';

export function Destroyable<T extends Constructor<Record<string, unknown>>>(
  Base: T = class {} as T,
) {
  return class extends Base implements OnDestroy {
    destroyed$ = new Subject<boolean>();

    takeUntilDestroyed = <K>(): MonoTypeOperatorFunction<K> => takeUntil<K>(this.destroyed$);

    ngOnDestroy() {
      this.destroyed$.next(true);
      this.destroyed$.complete();
    }
  };
}
