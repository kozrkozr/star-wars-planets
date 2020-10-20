import {PlanetsStateService} from '@app/core/services/planets/planets-state.service';
import {Observable} from 'rxjs';

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  loadedPlanetsPagesQuantity$: Observable<number>;

  constructor(public planetsState: PlanetsStateService) {}

  ngOnInit(): void {
    this.loadedPlanetsPagesQuantity$ = this.planetsState.select('loadedPagesQuantity');
  }
}
