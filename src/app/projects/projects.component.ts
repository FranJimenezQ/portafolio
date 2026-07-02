import { Component } from '@angular/core';
import { environment } from '../../environment';

interface Project {
  image: string | null;
  title: string;
  description: string;
  stack: string[];
  projectUrl: string | null;
  urlLabel: string;
  isPrivate: boolean;
  isClicklease?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

    projects: Project[] = [
    {
      image: environment.assetsPath + 'ai-cv-analyzer-2.png',
      title: 'AI CV Analyzer',
      description: 'AI-powered CV analysis tool built with Angular 19 and a Next.js BFF. Uses Groq\'s LLaMA model to evaluate resumes and provide structured feedback.',
      stack: ['Angular 19', 'Next.js', 'Groq', 'TypeScript'],
      projectUrl: 'https://ai-tech-interviewer-iota.vercel.app/',
      urlLabel: 'View Project',
      isPrivate: false
    },
    {
      image: environment.assetsPath + 'sarcasticBot-2.png',
      title: 'SarcastiBot',
      description: 'AI streaming chat app with a sarcastic personality. Built with Next.js and the Groq API with real-time token streaming.',
      stack: ['Next.js', 'Groq', 'Streaming', 'TypeScript'],
      projectUrl: 'https://ai-chat-app-navy-chi.vercel.app/',
      urlLabel: 'View Project',
      isPrivate: false
    },
    {
      image: environment.assetsPath + 'leadFlowPipeline.png',
      title: 'LeadFlow CRM',
      description: 'Full-stack CRM with Kanban pipeline, lead management, and N8N automation for email notifications on lead creation.',
      stack: ['React', 'Express', 'MongoDB', 'N8N', 'RxJS'],
      projectUrl: null,
      urlLabel: 'Local Demo',
      isPrivate: true
    },
    {
      image: null,
      title: 'Clicklease Partner Portal',
      description: 'Enterprise-grade partner-facing portal for equipment leasing operations. Built and maintained in a professional production environment.',
      stack: ['Angular 21', 'NgRx', 'Signals', 'TypeScript'],
      projectUrl: null,
      urlLabel: 'Enterprise · Private',
      isPrivate: true,
      isClicklease: true
    },
    {
      image: environment.assetsPath + "memoryGame.png",
      title: "Memory Game",
      description: "Memory game developed with JavaScript",
      projectUrl: "https://franjimenezq.github.io/memory-game/",
      stack: ['JavaScript', 'HTML', 'CSS'],
      urlLabel: 'View Project',
      isPrivate: false
    },
    {
      image: environment.assetsPath + "drinksApp.png",
      title: "Drinks App",
      description: "Drinks app created with Angular",
      projectUrl: "https://franjimenezq.github.io/drinks-app/",
      stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      urlLabel: 'View Project',
      isPrivate: false
    },
    {
      image: environment.assetsPath + "notiWeb.png",
      title: "NotiWeb",
      description: "News website built with HTML, CSS and Javascript",
      projectUrl: "https://franjimenezq.github.io/Noti-Web/",
      stack: ['HTML', 'CSS', 'JavaScript'],
      urlLabel: 'View Project',
      isPrivate: false
    },
    {
      image: environment.assetsPath + "rottenMovies38.png",
      title: "Rotten Movies 38",
      description: "Movie rating app using Angular",
      projectUrl: "https://franjimenezq.github.io/movie-Angular-App/",
      stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      urlLabel: 'View Project',
      isPrivate: false
    },
    {
      image: environment.assetsPath + "flakundoWeatherApp.png",
      title: "Weather App",
      description: "Weather App created using React, weatherApp Api and Google places api",
      projectUrl: "https://franjimenezq.github.io/WeatherApp/",
      stack: ['React', 'JavaScript', 'HTML', 'CSS'],
      urlLabel: 'View Project',
      isPrivate: false
    }
  ];
}
