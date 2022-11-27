import { Component } from '@angular/core';

@Component({
  selector: 'app-info-experience-work',
  templateUrl: './info-experience-work.component.html',
  styleUrls: ['./info-experience-work.component.css']
})
export class InfoExperienceWorkComponent {

  titleExperienceWork: string = "Информация об опыте работы.";

  experincesWork = [
    {
      dateStart: new Date(2009, 1),
      dateFinish: new Date(2010, 8),
      work: "инженер конструктор, вагоноремонтный завод имени Калинина, ремонт, производство ходовых частей для вагонов, оснащение вагонов внутренним оборудованием, г. Гомель."
    },
    {
      dateStart: new Date(2010, 8),
      dateFinish: new Date(2015, 4),
      work: "Индивидуальный Предприниматель (свой бизнес)."
    },
    {
      dateStart: new Date(2015, 4),
      dateFinish: new Date(2019, 11),
      work: "специалист по маркетингу, частное торговое унитарное предприятие «ПЛ – Леди» г. Гомель."
    },
    {
      dateStart: new Date(2019, 11),
      dateFinish: new Date(2022, 11),
      work: "частичная занятость в бизнесе (семейный бизнес)."
    },
  ];

  
}
