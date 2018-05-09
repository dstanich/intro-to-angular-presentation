See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
Example of usage of `interface` which is a TypeScript concept.  Creating class level variables which are then passed down through `@Input()` to components.  Contains examples of template syntax including `*ngFor`, `*ngIf`, and binding through `[]` and `{{}}`.

## Steps to get to the next branch...
1.  Add `<button>` to `grocery-item` to remove item
2.  Add `(click)` handler to item which sends the grocery item as paramter
3.  Add `@Output()` to `grocery-item.component.ts`
4.  Add function for handler, which emits the output event
5.  Add `(itemRemoved)` handler to `<app-grocery-list>` in `app.component.html` which passes in `$event`
6.  Add function for handler in `app.component.ts` which does `.splice(index, 1)` on the removed item