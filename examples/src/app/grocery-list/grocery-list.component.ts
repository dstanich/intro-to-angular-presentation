import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grocery } from '../app.component';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  @Input() items: Array<Grocery>;
  @Output() itemRemoved: EventEmitter<Grocery> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  removeClicked(item: Grocery) {
    this.itemRemoved.emit(item);
  }
}
