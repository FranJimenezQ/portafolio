import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { NgIf } from '@angular/common';
import { environment } from '../environment.prod';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AboutComponent, SkillsComponent, ContactComponent, ProjectsComponent, NgIf]
})
export class AppComponent {
  title = 'francisco-jimenez-portafolio';

  public  environmentAssetsPath = environment.assetsPath;

  visibleSections = {
    about: false,
    skills: false,
    contact: false,
    projects: false
  }

  toggleDiv(section: keyof typeof this.visibleSections){
    Object.keys(this.visibleSections).forEach((key) => {
      this.visibleSections[key as keyof typeof this.visibleSections] = false;
    });
    this.visibleSections[section] = true;
    
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }
}

