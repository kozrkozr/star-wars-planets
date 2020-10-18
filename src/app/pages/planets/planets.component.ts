import {PlanetsStateService} from '@app/core/services/planets/planets-state.service';
import {PlanetsService} from '@app/core/services/planets/planets.service';
import {Planet} from '@app/core/services/planets/types';
import {Destroyable} from '@app/core/utils/destroyable';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap, withLatestFrom} from 'rxjs/operators';

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent extends Destroyable() implements OnInit {
  planets$: Observable<Planet[]>;

  loadMorePlanets$ = new BehaviorSubject<boolean>(true);

  constructor(private planetsService: PlanetsService, private planetsState: PlanetsStateService) {
    super();
  }

  ngOnInit(): void {
    this.planets$ = this.planetsState.getPlanets();

    this.loadMorePlanets$
      .asObservable()
      .pipe(
        withLatestFrom(this.planetsState.getLoadPlanetsLink()),
        switchMap(([_, planetsLoadLink]) => this.planetsService.getPlanets(planetsLoadLink)),
        this.takeUntilDestroyed(),
      )
      .subscribe((planetsResponse) => this.planetsState.updatePlanets(planetsResponse));
  }
}
