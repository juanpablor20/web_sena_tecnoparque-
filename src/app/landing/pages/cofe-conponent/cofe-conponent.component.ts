import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-cofe-conponent',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './cofe-conponent.component.html',
  styleUrl: './cofe-conponent.component.css'
})
export class CofeConponentComponent {

}
