import { Component } from '@angular/core';
import { MatSidenavContent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  optionLoaded = 'recipe';

  onNavigation(option: string) {
    this.optionLoaded = option;
  }
}
