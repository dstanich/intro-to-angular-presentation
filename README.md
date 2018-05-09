See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
Examples showing how to use `angular-cli` to quickly create components.  Some small modifications are done to component files as an example of how they work.  Also quick demonstration of global `styles.css` and how it applies to the overall project.

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
5.  Add `@Input() item: Grocery` to `grocery-item` to accept specific item
6.  Update `grocery-item.component.html` to...
    * Print `{{item.name}}`
    * Add `<span *ngIf="item.isFood">` with something inside for when `isFood` is true