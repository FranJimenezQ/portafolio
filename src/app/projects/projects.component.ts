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
  baseHref: string = 'portafolio'

  projectsSlides = [
    {
      url: '/portafolio/assets/images/memoryGame.png',
      title: "Memory Game",
      description: "Memory game developed with JavaScript",
      projectUrl: "https://franjimenezq.github.io/memory-game/"
    },
    {
      url: "/portafolio/assets/images/drinksApp.png",
      title: "Drinks App",
      description: "Drinks app created with Angular",
      projectUrl: "https://franjimenezq.github.io/drinks-app/"

    },
    {
      url: "/portafolio/assets/images/notiWeb.png",
      title: "NotiWeb",
      description: "News website built with HTML, CSS and Javascript",
      projectUrl: "https://franjimenezq.github.io/Noti-Web/"

    },
    {
      url: "/portafolio/assets/images/rottenMovies38.png",
      title: "Rotten Movies 38",
      description: "Movie rating app using Angular",
      projectUrl: "https://franjimenezq.github.io/movie-Angular-App/"

    },
    {
      url: "/portafolio/assets/images/webTemplate.png",
      title: "Web Template",
      description: "Web template created with HTML & CSS",
      projectUrl: "https://franjimenezq.github.io/Flakundo-Web-Template1/"
    }
  ];
}
