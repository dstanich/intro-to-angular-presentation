import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchService } from './launch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latestLaunch: object;

  constructor(private launchService: LaunchService) {}

  fetchLatestLaunch() {
    this.launchService
      .getLatestLaunch()
      .subscribe(latest => (this.latestLaunch = latest));
  }
}
