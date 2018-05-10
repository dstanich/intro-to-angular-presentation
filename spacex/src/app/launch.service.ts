import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LaunchService {
  constructor(private httpClient: HttpClient) {}

  getLatestLaunch(): Observable<object> {
    return this.httpClient.get('https://api.spacexdata.com/v2/launches/latest');
  }
}
