import {SharedModule} from '@app/shared/shared.module';

import {NgModule} from '@angular/core';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
