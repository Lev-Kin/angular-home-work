import { Component } from '@angular/core';
import { ITEMS } from '../mock.picture';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  items = ITEMS;
}
