import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-cacao-cartilla',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './cacao-cartilla.component.html',
  styleUrl: './cacao-cartilla.component.css'
})
export class CacaoCartillaComponent {

}
