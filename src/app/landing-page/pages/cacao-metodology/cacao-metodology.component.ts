import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-cacao-metodology',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './cacao-metodology.component.html',
  styleUrl: './cacao-metodology.component.css'
})
export class CacaoMetodologyComponent {

}
