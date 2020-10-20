import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(renderer: Renderer2) {
    // for applying proper theme background
    // if main content not placed inside of mat-sidenav-container
    // (see https://material.angular.io/guide/theming#using-a-pre-built-theme)
    renderer.addClass(document.body, 'mat-app-background');
  }
}
