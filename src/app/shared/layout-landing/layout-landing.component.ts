import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { WasappButtonComponent } from '../components/wasapp-button/wasapp-button.component';

@Component({
  selector: 'app-layout-landing',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet, WasappButtonComponent],
  templateUrl: './layout-landing.component.html',
  styleUrl: './layout-landing.component.css'
})
export class LayoutLandingComponent {

}
