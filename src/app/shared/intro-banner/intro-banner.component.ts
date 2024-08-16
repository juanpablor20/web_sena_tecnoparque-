import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-intro-banner',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './intro-banner.component.html',
  styleUrl: './intro-banner.component.css'
})
export class IntroBannerComponent {

}
