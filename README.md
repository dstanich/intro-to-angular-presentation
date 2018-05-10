See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
Example of how to do two way binding (ngModel).  This is then used to add new items to the list.

## Steps to get to the next branch...
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
