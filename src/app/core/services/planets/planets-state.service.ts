import {INITIAL_PLANETS_STATE, Planet, PlanetsState} from '@app/core/services/planets/types';
import {BaseGetListResponse} from '@app/core/types';
import {BehaviorSubject, Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanetsStateService {
  planetsState$ = new BehaviorSubject<PlanetsState>(INITIAL_PLANETS_STATE);

  updatePlanets({count, next, previous, results}: BaseGetListResponse<Planet>): void {
    const currentState = this.planetsState$.getValue();
    this.planetsState$.next({
      ...currentState,
      nextPlanetsPortionLink: next,
      previousPlanetsPortionLink: previous,
      isPlanetsLoading: false,
      loadedPagesQuantity: currentState.loadedPagesQuantity + 1,
      planets: results,
      planetsCount: count,
    });
  }

  getPlanets(): Observable<Planet[]> {
    return this.planetsState$.asObservable().pipe(pluck('planets'));
  }

  getLoadPlanetsLink(): Observable<string> {
    return this.planetsState$.asObservable().pipe(pluck('nextPlanetsPortionLink'));
  }
}
