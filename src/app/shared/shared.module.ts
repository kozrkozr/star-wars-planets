import {MaterialModule} from '@app/shared/modules/material/material.module';

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [CommonModule, MaterialModule, FlexLayoutModule],
})
export class SharedModule {}
