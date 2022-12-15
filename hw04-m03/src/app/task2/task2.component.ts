import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock.picture';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
  styles: []
})
export class Task2Component {
  items = ITEMS;
  isButtonClick = false;
  styles = {
    min: true
  };

  toggle() {
    this.styles.min = !this.styles.min;
    this.isButtonClick = !this.isButtonClick;
  }

}
