import { NgClass, NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgClass,
    NgFor
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectsSlides = [
    {
      url: './../../assets/images/memoryGame.png',
      title: "memoryGame",
      description: ""
    },
    {
      url: "./../../assets/images/drinksApp.png",
      title: "drinksApp",
      description: ""
    },
    {
      url: "./../../assets/images/notiWeb.png",
      title: "notiWeb",
      description: ""
    },
    {
      url: "/assets/images/rottenMovies38.png",
      title: "rottenMovies38",
      description: ""
    },
    {
      url: "/assets/images/webTemplate.png",
      title: "webTemplate",
      description: ""
    }
  ];
}
