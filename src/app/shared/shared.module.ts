import {MaterialModule} from '@app/shared/modules/material/material.module';

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {InfoTileComponent} from './components/info-tile/info-tile.component';
import {LoadingBtnComponent} from './components/loading-btn/loading-btn.component';
import {ResidentInfoModalComponent} from './components/resident-info-modal/resident-info-modal.component';

@NgModule({
  declarations: [LoadingBtnComponent, InfoTileComponent, ResidentInfoModalComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [CommonModule, MaterialModule, FlexLayoutModule, LoadingBtnComponent, InfoTileComponent],
})
export class SharedModule {}
