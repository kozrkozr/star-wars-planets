import {BASE_PLANETS_API_URL} from '@app/core/services/planets/types';
import {Link} from '@app/core/types';

export const extractPlanetsIdFromLink = (planetsLink: Link): number | null => {
  const idInBasePlanetsUrlRegExp = new RegExp(`${BASE_PLANETS_API_URL}([0-9]+)\/`);
  return Number(idInBasePlanetsUrlRegExp.exec(planetsLink)[1]);
};
