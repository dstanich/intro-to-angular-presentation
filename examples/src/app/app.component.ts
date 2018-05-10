import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newItem: Grocery = { name: '', isFood: false };

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

  addItem() {
    this.groceries.push(this.newItem);
    this.newItem = { name: '', isFood: false };
  }
}

export interface Grocery {
  name: string;
  isFood: boolean;
}
