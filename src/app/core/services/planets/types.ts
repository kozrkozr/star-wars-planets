export type Link = string;

export interface BaseDto {
  name: string;
  films: Link[];
  url: Link;
}

export interface BaseGetListResponse<T> {
  count: number;
  next: Link;
  previous: Link;
  results: T[];
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
