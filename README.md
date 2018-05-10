See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
This branch focuses on how to handle outputs.  There are examples of capturing browser based outputs (mouse click) and component created outputs (EventEmitter).

## Steps to get to the next branch...
1.  Add `<button (click)="removeClicked(grocery)">[x]</button>` to `grocery-list` to remove item
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