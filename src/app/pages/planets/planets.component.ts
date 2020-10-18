import {PlanetsStateService} from '@app/core/services/planets/planets-state.service';
import {PlanetsService} from '@app/core/services/planets/planets.service';
import {Planet} from '@app/core/services/planets/types';
import {Destroyable} from '@app/core/utils/destroyable';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent extends Destroyable() implements OnInit {
  planets$: Observable<Planet[]>;

  isPlanetsLoading$: Observable<boolean>;

  isAllPlanetsLoaded$: Observable<boolean>;

  loadMorePlanets$ = new BehaviorSubject<boolean>(true);

  constructor(private planetsService: PlanetsService, private planetsState: PlanetsStateService) {
    super();
  }

  ngOnInit(): void {
    this.planets$ = this.planetsState.select('planets');
    this.isPlanetsLoading$ = this.planetsState.select('isPlanetsLoading');
    this.isAllPlanetsLoaded$ = this.planetsState
      .select('nextPlanetsPortionLink')
      .pipe(map((link) => !link));

    this.loadMorePlanets$
      .asObservable()
      .pipe(
        switchMap(() => this.planetsState.loadPlanets()),
        this.takeUntilDestroyed(),
      )
      .subscribe();
  }
}
