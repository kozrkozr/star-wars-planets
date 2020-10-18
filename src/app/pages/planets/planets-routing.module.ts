import {PlanetInfoComponent} from '@app/pages/planets/components/planet-info/planet-info.component';
import {PlanetsComponent} from '@app/pages/planets/planets.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
  },
  {
    path: ':id',
    component: PlanetInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
