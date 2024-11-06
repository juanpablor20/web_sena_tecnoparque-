import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-coffe-metodology',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './coffe-metodology.component.html',
  styleUrl: './coffe-metodology.component.css'
})
export class CoffeMetodologyComponent {

}
