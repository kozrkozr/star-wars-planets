import {Planet, PlanetResident} from '@app/core/services/planets/types';
import {BaseGetListResponse, Link} from '@app/core/types';
import {filterNonNil} from '@app/core/utils/general.utils';
import {forkJoin, Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private httpClient: HttpClient) {}

  getPlanets(link: Link): Observable<BaseGetListResponse<Planet>> {
    return this.httpClient.get<BaseGetListResponse<Planet>>(link).pipe(filterNonNil());
  }

  getPlanetResidentInfo(link: Link): Observable<PlanetResident> {
    return this.httpClient.get<PlanetResident>(link).pipe(filterNonNil());
  }

  getAllPlanetResidentsInfo(residentsLinks: Link[]): Observable<PlanetResident[]> {
    return forkJoin(residentsLinks.map((residentLink) => this.getPlanetResidentInfo(residentLink)));
  }
}
