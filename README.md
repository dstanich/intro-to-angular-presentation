See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
Example of how to create a service, store data, and inject service into components.

## Steps to get to the next branch...
1.  Create a service using `ng generate service grocery`
2.  Add `GroceryService` to `providers` array in `app.module.ts` and import it

TBD
3.  Move grocery items object to class level in the `grocery.service.ts`
4.  Add getter for groceries to the service
```
        get groceries(): Array<Grocery> {
          return this.groceries;
        }
```
5.  Inject `grocery.service.ts` into constructor of `app.component.ts` using `private groceryService: GroceryService`
6.  Add class variable to `app.component.ts` to proxy the service `groceries: Array<Grocery>;`
7.  In constructor, set class level variable to the servicexxx