import {PlanetsService} from '@app/core/services/planets/planets.service';
import {Planet, PlanetResident} from '@app/core/services/planets/types';
import {Destroyable} from '@app/core/utils/destroyable';
import {ResidentInfoModalComponent} from '@app/shared/components/resident-info-modal/resident-info-modal.component';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss'],
})
export class PlanetInfoComponent extends Destroyable() implements OnInit {
  planetInfo$: Observable<Planet>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private planetsService: PlanetsService,
    private dialog: MatDialog,
  ) {
    super();
  }

  ngOnInit(): void {
    // get id from params for persist data after page reload
    this.planetInfo$ = this.activatedRoute.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((planetId) => this.planetsService.getPlanetWithResidentsDetails(planetId)),
    );
  }

  openResidentInfoModal(resident: PlanetResident): void {
    this.dialog.open<ResidentInfoModalComponent, PlanetResident>(ResidentInfoModalComponent, {
      data: resident,
      maxWidth: 700,
      width: '80vw',
    });
  }
}
