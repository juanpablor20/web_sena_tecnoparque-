import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../../../shared/components/slider/slider.component';

@Component({
  selector: 'app-cacao-metodology',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, SliderComponent],
  templateUrl: './cacao-metodology.component.html',
  styleUrl: './cacao-metodology.component.css'
})
export class CacaoMetodologyComponent {

}
