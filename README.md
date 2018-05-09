See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
Example of usage of `interface` which is a TypeScript concept.  Creating class level variables which are then passed down through `@Input()` to components.  Contains examples of template syntax including `*ngFor`, `*ngIf`, and binding through `[]` and `{{}}`.

## Steps in this branch
1.  Add interface for a `Grocery`
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

3.  Add `@Input()` to `grocery-list` to accept items
4.  Update `grocery-list.component.html` to have `*ngFor` and output items
5.  Add `@Input()` to `grocery-item` to accept specific item
6.  Update `grocery-item.component.html` to...
    * Print `{{item.name}}`
    * Add `<span>` with `*ngIf` for when `isFood` is true
