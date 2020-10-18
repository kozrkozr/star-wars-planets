import {MaterialModule} from '@app/shared/modules/material/material.module';

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {LoadingBtnComponent} from './components/loading-btn/loading-btn.component';

@NgModule({
  declarations: [LoadingBtnComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [CommonModule, MaterialModule, FlexLayoutModule, LoadingBtnComponent],
})
export class SharedModule {}
