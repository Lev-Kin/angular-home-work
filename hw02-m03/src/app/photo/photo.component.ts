import { Component } from '@angular/core';

// Include it into the necessary NgModule
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})


export class PhotoComponent {
  src = '../assets/image/photo600x600.jpg';
}
