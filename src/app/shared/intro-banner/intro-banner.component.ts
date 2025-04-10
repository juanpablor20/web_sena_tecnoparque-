import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-intro-banner',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './intro-banner.component.html',
  styleUrl: './intro-banner.component.css'
})
export class IntroBannerComponent {

  imageUrl = '/assets/img/section-3-cacao.webp'; 
}
