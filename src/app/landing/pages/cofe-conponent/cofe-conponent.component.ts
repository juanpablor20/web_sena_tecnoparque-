import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { WasappButtonComponent } from '../../../shared/components/wasapp-button/wasapp-button.component';

@Component({
  selector: 'app-cofe-conponent',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, WasappButtonComponent],
  templateUrl: './cofe-conponent.component.html',
  styleUrl: './cofe-conponent.component.css'
})
export class CofeConponentComponent {

}
