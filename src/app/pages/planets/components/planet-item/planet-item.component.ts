import {Planet} from '@app/core/services/planets/types';

import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetItemComponent {
  @Input() planet: Planet;

  @Input() preview: boolean;

  @Output() clicked = new EventEmitter<Planet>();
}
