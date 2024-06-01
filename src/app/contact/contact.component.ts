import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contact = [
    {
      icon: 'assets/images/email_icon.png',
      name:"Email",
      medio:"flakundo@gmail.com"
    },
    {
      icon: 'assets/images/Phone_icon.png',
      name:"Phone number",
      medio:"CR(506)-8313-4884"
    }
  ]
}
