import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private groceries: Array<Grocery> = [
    {
      name: 'Apples',
      isFood: true
    },
    {
      name: 'Shampoo',
      isFood: false
    },
    {
      name: 'Milk',
      isFood: true
    },
    {
      name: 'Cereal',
      isFood: true
    }
  ];
}

export interface Grocery {
  name: string;
  isFood: boolean;
}
