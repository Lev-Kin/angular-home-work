import { Component } from '@angular/core';


// Include it into the necessary NgModule
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],

})


export class PhotoComponent {
  
 //src = `https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg`;

 src = '../assets/image/photo600x600.jpg';  

}
