import {PlanetsRoutingModule} from '@app/pages/planets/planets-routing.module';
import {SharedModule} from '@app/shared/shared.module';

import {NgModule} from '@angular/core';

import {PlanetInfoComponent} from './components/planet-info/planet-info.component';
import {PlanetItemComponent} from './components/planet-item/planet-item.component';
import {PlanetsComponent} from './planets.component';

@NgModule({
  declarations: [PlanetItemComponent, PlanetsComponent, PlanetInfoComponent],
  imports: [SharedModule, PlanetsRoutingModule],
})
export class PlanetsModule {}
