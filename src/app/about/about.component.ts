import { Component } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  profileImagePath = environment.assetsPath + 'linkedindProfilePhoto.jpeg'

}
