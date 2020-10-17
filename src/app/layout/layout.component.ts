import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @HostBinding('class.mat-app-background') matAppBackgroundClass = true;
}
