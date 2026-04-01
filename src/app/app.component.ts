import { Component, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { environment } from '../environment';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [AboutComponent, SkillsComponent, ContactComponent, ProjectsComponent],
    animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(12px)' }),
          animate('250ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ])
    ]
})
export class AppComponent {
  title = 'francisco-jimenez-portafolio';

  public environmentAssetsCvPath = environment.cvAssetsPath;

  visibleSections = signal({
    skills: true,
    contact: false,
    projects: false
  });

  toggleDiv(section: keyof ReturnType<typeof this.visibleSections>) {
    this.visibleSections.update(current => {
      const reset = Object.fromEntries(
        Object.keys(current).map(k => [k, false])
      ) as typeof current;
      return { ...reset, [section]: true };
    });

    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}

