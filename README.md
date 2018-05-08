See [master](https://github.com/dstanich/intro-to-angular-presentation) branch.

## Steps
1.  Add info to `styles.css`
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
3.  Add background color to `header`
4.  Generate body component `ng generate component body`
5.  Add components to `index.html`
6.  Generate components within `body`...
7.  `cd src/app/body`
8.  `ng generate component left`
9.  `ng generate component right`
10.  Add `app-left` and `app-right` to `body.component.html`
11.  Set `body.component.css` to `display: flex` and `app-left`/`app-right` to `flex: 1`
12.  Set background color in left/right