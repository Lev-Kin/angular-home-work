import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITEMS } from '../mock.picture';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
  styles: []
})
export class Task3Component implements OnInit {

  @Output() onChanged = new EventEmitter<number>();

  items = ITEMS;
  styles = {
    min: true
  };
  id = 0;

  constructor() { }
  ngOnInit() { }

  pictureClick(id: number): void {
    if (this.items[id]) {
      this.id = id;
    } else {
      this.id = 0;
    }
  }
}
