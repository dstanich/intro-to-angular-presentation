See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
Example of usage of `interface` which is a TypeScript concept.  Creating class level variables which are then passed down through `@Input()` to components.  Contains examples of template syntax including `*ngFor`, `*ngIf`, and binding through `[]` and `{{}}`.

## Steps to get to the next branch...
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
