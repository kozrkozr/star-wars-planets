import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private httpClient: HttpClient) {}
}
