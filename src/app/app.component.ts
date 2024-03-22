import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AboutComponent, SkillsComponent, ContactComponent, ProjectsComponent, NgIf]
})
export class AppComponent {
  title = 'francisco-jimenez-portafolio';

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
  }
}

// this.visibleSections[section] = !this.visibleSections[section] 
// if (this.visibleSections.skills == true) {
//     this.visibleSections.contact = false;
//     this.visibleSections.projects = false;

// }
// if (this.visibleSections.contact) {
//   this.visibleSections.skills = false;
//   this.visibleSections.projects = false
// }
// if (this.visibleSections.projects) {
//   this.visibleSections.contact = false;
//   this.visibleSections.skills = false;
// }