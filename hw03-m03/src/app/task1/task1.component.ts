import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {

  titleProgrammingLanguage: string = "Информация об понимании языков программирования в %";
  titleSalariesProgrammingLanguage: string = "Информация об зарплатах по языкам программированя в";
  sizeProgrammingSalary!: number;

  programmingLanguage = [
    {
      type: "C",
      undefined: 0.58
    },
    {
      type: "C++",
      undefined: 0.63
    },
    {
      type: "Java",
      undefined: 0.76
    },
    {
      type: "JavaScript",
      undefined: 0.67
    },
    {
      type: "TypeScript",
      undefined: 0.38
    },
  ];

  programmingSalary = [
    {
      type: "C++",
      salaryMin: 62599,
      salaryMax: 86172
    },
    {
      type: "Java",
      salaryMin: 70187,
      salaryMax: 123554
    },
    {
      type: "JavaScript",
      salaryMin: 97577,
      salaryMax: 119839
    },

  ];

  getSizeProgrammingSalary(programmingSalary: []){

  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
