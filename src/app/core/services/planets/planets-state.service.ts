import {PlanetsService} from '@app/core/services/planets/planets.service';
import {INITIAL_PLANETS_STATE, Planet, PlanetsState} from '@app/core/services/planets/types';
import {BaseGetListResponse} from '@app/core/types';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';
import {pluck, tap} from 'rxjs/operators';

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanetsStateService {
  planetsState$ = new BehaviorSubject<PlanetsState>(INITIAL_PLANETS_STATE);

  constructor(private planetsService: PlanetsService) {}

  updatePlanets({count, next, previous, results}: BaseGetListResponse<Planet>): void {
    const currentState = this.planetsState$.getValue();
    this.planetsState$.next({
      ...currentState,
      nextPlanetsPortionLink: next,
      previousPlanetsPortionLink: previous,
      isPlanetsLoading: false,
      loadedPagesQuantity: currentState.loadedPagesQuantity + 1,
      planets: [...currentState.planets, ...results],
      planetsCount: count,
    });
  }

  loadPlanets(): Observable<BaseGetListResponse<Planet>> {
    const planetsState = this.planetsState$.getValue();
    if (!planetsState.nextPlanetsPortionLink) {
      return EMPTY;
    }
    this.planetsState$.next({...planetsState, isPlanetsLoading: true});
    return this.planetsService
      .getPlanets(planetsState.nextPlanetsPortionLink)
      .pipe(tap((planetsResponse) => this.updatePlanets(planetsResponse)));
  }

  select<K extends keyof PlanetsState>(storeKey: K): Observable<PlanetsState[K]> {
    return this.planetsStateObservable.pipe(pluck(storeKey));
  }

  get planetsStateObservable(): Observable<PlanetsState> {
    return this.planetsState$.asObservable();
  }
}
