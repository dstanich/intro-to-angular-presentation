See [master](https://github.com/dstanich/intro-to-angular-presentation) branch.

## Steps in this branch
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
3.  Update text within `header`
4.  Add background color to `header`
5.  Generate add-item component `ng generate component add-item`
6.  Generate grocery-list component `ng generate component grocery-list`
7.  Add `app-header`, `app-add-item`, `app-grocery-list` to `app.component.html`
8.  Generate grocery-item component within grocery-list `ng generate component app/grocery-list/grocery-item`.
    - This will be used in a later branch