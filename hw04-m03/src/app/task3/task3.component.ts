import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock.picture';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
  styles: []
})
export class Task3Component implements OnInit {

  items = ITEMS;
  isButtonClick = false;
  styles = {
    min: true
  };

  toggle() {
    this.styles.min = !this.styles.min;
    this.isButtonClick = !this.isButtonClick;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
