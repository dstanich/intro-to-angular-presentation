See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
This branch focuses on how to handle outputs.  There are examples of capturing browser based outputs (mouse click) and component created outputs (EventEmitter).

## Steps in this branch
1.  Add `<button>` to `grocery-item` to remove item
2.  Add `(click)` handler to item which sends the grocery item as paramter
3.  Add `@Output()` to `grocery-item.component.ts`
4.  Add function for handler, which emits the output event
5.  Add `(itemRemoved)` handler to `<app-grocery-list>` in `app.component.html` which passes in `$event`
6.  Add function for handler in `app.component.ts` which does `.splice(index, 1)` on the removed item