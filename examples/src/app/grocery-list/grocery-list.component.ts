import { Component, OnInit, Input } from '@angular/core';
import { Grocery } from '../app.component';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  @Input() items: Array<Grocery>;

  constructor() {}

  ngOnInit() {}
}
