See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
Example of how to create a service, inject it into a component, and using the Angular HttpClient.  Some basic Observable behavior is also demoed.

## Steps to get to the next branch...
1.  `cd` back to root directory
2.  Create new CLI project `ng new spacex`
3.  Generate a service: `ng generate service launch`
4.  Add `LaunchService` to `providers` array in `app.module.ts`
5.  Add `import { HttpClientModule } from '@angular/common/http'` to `app.module.ts` and to `imports`
6.  In `launch.service.ts`, add a constructor and inject HttpClient: `private httpClient: HttpClient`
7.  Add `getLatestLaunch()` function to the `launch.service.ts` file to use HttpClient to call an API to get the latest SpaceX launch
```
  getLatestLaunch(): Observable<object> {
    return this.httpClient.get('https://api.spacexdata.com/v2/launches/latest');
  }
```

8.  Remove everything from `app.component.html` and replace with
```
        <button (click)="fetchLatestLaunch()">Get Latest Launch</button>
        <pre>{{latestLaunch}}</pre>
```

9.  In `app.component.ts`, add a constructor and inject `launch.service.ts`: `private launchService: LaunchService`

10.  Add `fetchLatestLaunch()` function to `app.component.ts` which calls service and subscribes
```
    this.launchService
      .getLatestLaunch()
      .subscribe(latest => (this.latestLaunch = latest));
```
