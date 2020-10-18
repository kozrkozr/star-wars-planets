import {PlanetsService} from '@app/core/services/planets/planets.service';
import {Planet} from '@app/core/services/planets/types';
import {Destroyable} from '@app/core/utils/destroyable';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss'],
})
export class PlanetInfoComponent extends Destroyable() implements OnInit {
  planetInfo$: Observable<Planet>;

  constructor(private activatedRoute: ActivatedRoute, private planetsService: PlanetsService) {
    super();
  }

  ngOnInit(): void {
    this.planetInfo$ = this.activatedRoute.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((planetId) => this.planetsService.getPlanetWithResidentsDetails(planetId)),
    );
  }
}
