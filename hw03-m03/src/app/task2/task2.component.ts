import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {

  titleEducation: string = "Информация об образовании";

  education = [
    {
      dateStart: new Date(1991, 0),
      dateFinish: new Date(2000, 0),
      type: "Среднее образование",
      place: "Гомельская средняя школа №25"
    },
    {
      dateStart: new Date(2000, 0),
      dateFinish: new Date(2003, 0),
      type: "Среднее техническое образование",
      place: "Гомельское профессионально-техническое училище №78 машиностроения"
    },
    {
      dateStart: new Date(2003, 0),
      dateFinish: new Date(2008, 0),
      type: "Высшее образование",
      place: "Белорусский Государственный Университет Tранспорта"
    },

  ];

}
