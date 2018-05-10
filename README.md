See [master](https://github.com/dstanich/intro-to-angular-presentation) branch for all details.

## Branch overview
Examples of how to quickly create components with `angular-cli`.  Some basic examples of how to change global styles with `styles.css` and basic component layout by modifying a template.

## Steps to get to the next branch...
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
```
        :host {
        display: block;
        background: pink;
        }
```

5.  Generate grocery-list component `ng generate component grocery-list`
6.  Add `app-header` and `app-grocery-list` to `app.component.html`

```
        <app-header></app-header>
        <app-grocery-list></app-grocery-list>
```

7.  Generate grocery-item component within grocery-list `ng generate component grocery-list/grocery-item`.
    * This will be used in a later branch