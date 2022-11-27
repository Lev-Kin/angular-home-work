import { Component } from '@angular/core';

@Component({
  selector: 'app-link-resource',
  templateUrl: './link-resource.component.html',
  styleUrls: ['./link-resource.component.css']
})
export class LinkResourceComponent {
  
  titleResource: string = "Ссылки на ресурсы.";

  resources = [
    {
      description: "GitHub",
      link:"https://github.com/Lev-Kin"
    },
    {
      description: "LinkedIn",
      link:"https://www.linkedin.com/in/oleg-levanov-a335331ba/"
    },
    {
      description: "Twitter",
      link:"https://twitter.com/PrimaLLeva"
    },
    {
      description: "JetBrains Academy",
      link:"https://hyperskill.org/profile/221697500"
    },
  ];
}
