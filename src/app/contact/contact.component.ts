import { Component } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contact = [
    {
      icon: environment.assetsPath + 'email_icon.png',
      name: "Email",
      medio: "flakundo@gmail.com",
      link: "mailto:flakundo@gmail.com"
    },
    {
      icon: environment.assetsPath + 'Phone_icon.png',
      name: "Phone number",
      medio: "CR(506)-8313-4884",
      link: "tel:+50683134884"
    }
  ]
}
