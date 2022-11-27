import { Component } from '@angular/core';

@Component({
  selector: 'app-info-skill',
  templateUrl: './info-skill.component.html',
  styleUrls: ['./info-skill.component.css']
})
export class InfoSkillComponent {
  titleSkill: string = "Информация о навыках.";

  skills = [
    {
      skill: "Английский язык уровень А2",
      company: "Лидер"
    },
    {
      skill: "C, C++, C#, Sql",
      company: "It-Step"
    },
    {
      skill: "Java: Spring, Hibernate, H2",
      company: "EPAM"
    },
    {
      skill: "Java: All Java Course",
      company: "Jetbrains Aacademy"
    },
    {
      skill: "Html, Css, JavaScript, Angular, React",
      company: "It-Step"
    },
  ];

}
