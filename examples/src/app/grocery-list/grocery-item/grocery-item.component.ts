import { Component, OnInit, Input } from '@angular/core';
import { Grocery } from '../../app.component';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
  @Input() item: Grocery;

  constructor() {}

  ngOnInit() {}
}
