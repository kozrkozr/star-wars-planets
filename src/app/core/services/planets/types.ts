import {Link} from '@app/core/types';

export interface BaseDto {
  name: string;
  films: Link[];
  url: Link;
}

export interface PlanetResident extends BaseDto {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: Link;
  species: Link[];
  vehicles: Link[];
  starships: Link[];
  created: string;
  edited: string;
}

export interface Planet extends BaseDto {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  gravity: string;
  orbital_period: string;
  population: string;
  residents: Link[] | PlanetResident[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
}

export interface PlanetsState {
  planets: Planet[];
  nextPlanetsPortionLink: Link;
  previousPlanetsPortionLink: Link;
  planetsCount: number;
  loadedPagesQuantity: number;
  isPlanetsLoading: boolean;
}

export const INITIAL_PLANETS_STATE: PlanetsState = {
  planets: [],
  nextPlanetsPortionLink: 'https://swapi.dev/api/planets/',
  previousPlanetsPortionLink: null,
  planetsCount: 0,
  loadedPagesQuantity: 0,
  isPlanetsLoading: false,
};
