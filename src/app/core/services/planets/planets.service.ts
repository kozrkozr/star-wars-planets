import {BASE_PLANETS_API_URL, Planet, PlanetResident} from '@app/core/services/planets/types';
import {BaseGetListResponse, Link} from '@app/core/types';
import {filterNonNil} from '@app/core/utils/general.utils';
import {forkJoin, iif, Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

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

  getPlanetDetails(planetId: number): Observable<Planet> {
    return this.httpClient.get<Planet>(`${BASE_PLANETS_API_URL}${planetId}`).pipe(filterNonNil());
  }

  getPlanetWithResidentsDetails(planetId: number): Observable<Planet> {
    return this.httpClient
      .get<Planet>(`${BASE_PLANETS_API_URL}${planetId}`)
      .pipe(
        switchMap((planet) =>
          iif(
            () => !!planet.residents?.length,
            this.getAllPlanetResidentsInfo(planet.residents as Link[]).pipe(
              map((residents) => ({...planet, residents})),
            ),
            of(planet),
          ),
        ),
      );
  }

  getPlanetResidentInfo(link: Link): Observable<PlanetResident> {
    return this.httpClient.get<PlanetResident>(link).pipe(filterNonNil());
  }

  getAllPlanetResidentsInfo(residentsLinks: Link[]): Observable<PlanetResident[]> {
    return forkJoin(residentsLinks.map((residentLink) => this.getPlanetResidentInfo(residentLink)));
  }
}
