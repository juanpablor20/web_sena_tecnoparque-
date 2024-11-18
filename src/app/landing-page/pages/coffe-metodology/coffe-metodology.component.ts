import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { OpenCloseComponent } from '../../../open-close/open-close.component';

@Component({
  selector: 'app-coffe-metodology',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, OpenCloseComponent],
  templateUrl: './coffe-metodology.component.html',
  styleUrl: './coffe-metodology.component.css'
})
export class CoffeMetodologyComponent {

}
