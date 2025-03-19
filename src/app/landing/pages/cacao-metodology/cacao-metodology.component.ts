import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { WasappButtonComponent } from '../../../shared/components/wasapp-button/wasapp-button.component';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cacao-metodology',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, SliderComponent, WasappButtonComponent, NgOptimizedImage, JsonPipe],
  templateUrl: './cacao-metodology.component.html',
  styleUrl: './cacao-metodology.component.css'
})
export class CacaoMetodologyComponent {


  public mazorcaImages: string[] = [
    '/assets/img/Cacao(1)/2Seleccion_grano/20240622_082803_resultado.webp',
    '/assets/img/Cacao(1)/2Seleccion_grano/20240622_073709_resultado.webp',
    '/assets/img/Cacao(1)/2Seleccion_grano/20240611_102359_resultado.webp',
    '/assets/img/Cacao(1)/2Seleccion_grano/20240622_073624_resultado.webp',
    '/assets/img/Cacao(1)/1poscosecha/3.webp',
    '/assets/img/Cacao(1)/1poscosecha/4.webp',
    '/assets/img/Cacao(1)/1poscosecha/5.webp',
    '/assets/img/Cacao(1)/2Seleccion_grano/20240622_081227_resultado.webp',
    
  ];
  public phLabImages: string[] = [
   '/assets/img/Cacao(1)/6pHLab/20240623_104710_resultado.webp', 
    '/assets/img/Cacao(1)/6pHLab/20240626_111424_resultado.webp', 
    '/assets/img/Cacao(1)/6pHLab/20240713_095843_resultado.webp',
    '/assets/img/Cacao(1)/6pHLab/20240713_095904_resultado.webp', 
    '/assets/img/Cacao(1)/6pHLab/20240714_092459_resultado.webp' 
  ];

  public phLab2Images: string[] = [

    '/assets/img/Cacao(1)/6pHLab/20240714_092459_resultado.webp', 
    '/assets/img/Cacao(1)/7pHLab2/20240623_165409_resultado.webp',
    '/assets/img/Cacao(1)/7pHLab2/20240623_170545_resultado.webp',
    '/assets/img/Cacao(1)/7pHLab2/20240622_130602_resultado.webp',
    '/assets/img/Cacao(1)/7pHLab2/20240622_130552_resultado.webp'
  ];

}

