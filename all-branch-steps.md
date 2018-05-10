# All branch instructions

## 00-starter
1.  Install angular-cli: `npm install @angular/cli -g`
2.  Generate new project: `ng new examples`
3.  Start the application: `npm start`


## 01-components
1.  Add info to `styles.css` to get rid of padding/margin.

```
        html, body {
          width: 100%;
          height: 100%;
        }

        * {
          margin: 0;
          padding: 0;
        }
```

2.  Generate header component `ng generate component header`
3.  Update text within `header` to have a title
4.  Edit `header.component.css` to add a `:host` selector with `background: pink`
```
        :host {
          display: block;
          background: pink;
        }
```

5.  Generate grocery-list component `ng generate component grocery-list`
6.  Add `app-header` and `app-grocery-list` to `app.component.html`

```
        <app-header></app-header>
        <app-grocery-list></app-grocery-list>
```

7.  Generate grocery-item component within grocery-list `ng generate component grocery-list/grocery-item`.
    * This will be used in a later branch


## 02-inputs
1.  Add interface for a `Grocery` in `app.component.ts`
```
      export interface Grocery {
        item: string;
        isFood: boolean;
      }
```

2.  Create structure of grocery list in `app.component.ts`
```
      private groceries: Array<Grocery> = [{
        name: 'Apples',
        isFood: true
      }, {
        name: 'Shampoo',
        isFood: false
      }, {
        name: 'Milk',
        isFood: true
      }, {
        name: 'Cereal',
        isFood: true
      }]
```

3.  Add `@Input() items: Array<Grocery>` to `grocery-list` to accept items
4.  Update `grocery-list.component.html` to have `*ngFor="let grocery of items"` and output items
```
        <p *ngFor="let grocery of items">
          <app-grocery-item [item]="grocery"></app-grocery-item>
        </p>
```

5.  Add `@Input() item: Grocery` to `grocery-item` to accept specific item
6.  Update `grocery-item.component.html` to:
```
        <b>{{item.name}}</b>
        <span *ngIf="item.isFood">
          **FOOD**
        </span>
```


## 03-outputs
1.  Add `<button (click)="removeClicked(grocery)">[x]</button>` to `grocery-item` to remove item
2.  Add `@Output() itemRemoved: EventEmitter<Grocery> = new EventEmitter();` to `grocery-list.component.ts`
3.  Add function for handler, which emits the output event
```
        removeClicked(item: Grocery) {
          this.itemRemoved.emit(item);
        }
```

4.  Add `(itemRemoved)="itemRemoved($event)"` handler to `<app-grocery-list>` in `app.component.html`
5.  Add `itemRemoved()` function for handler in `app.component.ts` which removes the item
```
        itemRemoved(item: Grocery) {
          this.groceries.splice(this.groceries.indexOf(item), 1);
        }
```


## 04-ngmodel
1.  Add two `<input>` for item name and isFood value.  Add `<button>` for add action.
```
        <input type="text">
        <input type="checkbox" id="isFood">
        <label for="isFood">Food</label>
        <button>Add</button>
```

2.  Add `newItem: Grocery` as a class variable to `app.component.ts`
3.  Add `import { FormsModule } from '@angular/forms';` to `app.module.ts` and add to `imports`
4.  Add `[(ngModel)]="newItem.name"` to textbox
5.  Add `[(ngModel)]="newItem.isFood"` to checkbox
6.  Add `(click)="addItem()"` to button with call to function
7.  Add `addItem()` handler function to `app.component.ts` which adds to array and clears item
```
        addItem() {
          this.groceries.push(this.newItem);
          this.newItem = { name: '', isFood: false };
        }
```


## 05-http-service
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
