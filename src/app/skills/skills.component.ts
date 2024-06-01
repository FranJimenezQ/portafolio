import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    {
      name: 'JavaScript',
      icon: 'assets/images/javascript_icon.png',
      description: 'I have worked with JavaScript for over 5 years, developing interactive web applications.'
    },
    {
      name: 'TypeScript',
      icon: 'assets/images/typescript_icon.png',
      description: 'I use TypeScript to improve code quality and maintainability in Angular projects.'
    },
    {
      name: 'Angular',
      icon: 'assets/images/angular_icon.png',
      description: 'I develop SPA applications with Angular, creating reusable components and robust services.'
    },
    {
      name: 'HTML',
      icon: 'assets/images/html_icon.png',
      description: 'I have strong experience in HTML.'
    },
    {
      name: 'CSS',
      icon: 'assets/images/css_icon.png',
      description: 'I have strong experience in CSS, creating responsive and accessible user interfaces.'
    },
    
  ];


}
