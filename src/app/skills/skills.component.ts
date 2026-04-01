import { Component } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    {
      name: 'JavaScript',
      icon: environment.assetsPath + 'javascript_icon.png',
      description: 'I have worked with JavaScript for over 5 years, developing interactive web applications.'
    },
    {
      name: 'TypeScript',
      icon: environment.assetsPath + 'typescript_icon.png',
      description: 'I use TypeScript to improve code quality and maintainability in Angular projects.'
    },
    {
      name: 'Angular',
      icon: environment.assetsPath + 'angular_icon.png',
      description: 'I develop SPA applications with Angular, creating reusable components and robust services.'
    },
    {
      name: 'HTML',
      icon: environment.assetsPath + 'html_icon.png',
      description: 'I have strong experience in HTML.'
    },
    {
      name: 'CSS',
      icon: environment.assetsPath + 'css_icon.png',
      description: 'I have strong experience in CSS, creating responsive and accessible user interfaces.'
    },
  ];


}
