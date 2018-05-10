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
5.  Add `@Input() item: Grocery` to `grocery-item` to accept specific item
6.  Update `grocery-item.component.html` to...
    * Print `{{item.name}}`
    * Add `<span *ngIf="item.isFood">` with something inside for when `isFood` is true


## 03-outputs
1.  Add `<button>` to `grocery-item` to remove item
2.  Add `(click)` handler to item which sends the grocery item as paramter
3.  Add `@Output()` to `grocery-item.component.ts`
4.  Add function for handler, which emits the output event
5.  Add `(itemRemoved)` handler to `<app-grocery-list>` in `app.component.html` which passes in `$event`
6.  Add function for handler in `app.component.ts` which does `.splice(index, 1)` on the removed item


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
7.  Add `addItem()` handler function to `app.component.ts`
8.  Inside handler function, push `newItem` to array and clear `newItem`
