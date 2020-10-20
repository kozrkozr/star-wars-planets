import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-info-tile',
  templateUrl: './info-tile.component.html',
  styleUrls: ['./info-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoTileComponent {}
