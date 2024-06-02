import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../environment';

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
      url: environment.assetsPath + 'memoryGame.png',
      title: "Memory Game",
      description: "Memory game developed with JavaScript",
      projectUrl: "https://franjimenezq.github.io/memory-game/"
    },
    {
      url: environment.assetsPath + "drinksApp.png",
      title: "Drinks App",
      description: "Drinks app created with Angular",
      projectUrl: "https://franjimenezq.github.io/drinks-app/"

    },
    {
      url: environment.assetsPath + "notiWeb.png",
      title: "NotiWeb",
      description: "News website built with HTML, CSS and Javascript",
      projectUrl: "https://franjimenezq.github.io/Noti-Web/"

    },
    {
      url: environment.assetsPath + "rottenMovies38.png",
      title: "Rotten Movies 38",
      description: "Movie rating app using Angular",
      projectUrl: "https://franjimenezq.github.io/movie-Angular-App/"

    },
    {
      url: environment.assetsPath + "webTemplate.png",
      title: "Web Template",
      description: "Web template created with HTML & CSS",
      projectUrl: "https://franjimenezq.github.io/Flakundo-Web-Template1/"
    }
  ];
}
