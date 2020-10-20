import {PlanetResident} from '@app/core/services/planets/types';

import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-resident-info-modal',
  templateUrl: './resident-info-modal.component.html',
  styleUrls: ['./resident-info-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResidentInfoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public resident: PlanetResident) {}
}
