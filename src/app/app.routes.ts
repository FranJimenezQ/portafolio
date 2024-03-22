import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
];
