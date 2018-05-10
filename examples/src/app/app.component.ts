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

  itemRemoved(item: Grocery) {
    this.groceries.splice(this.groceries.indexOf(item), 1);
  }
}

export interface Grocery {
  name: string;
  isFood: boolean;
}
