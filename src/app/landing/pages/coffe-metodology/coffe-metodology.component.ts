import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ImageGalleryComponent } from '../../../shared/components/image-gallery/image-gallery.component';

@Component({
  selector: 'app-coffe-metodology',
  standalone: true,
  imports: [ImageGalleryComponent, NgOptimizedImage],
  templateUrl: './coffe-metodology.component.html',
  styleUrl: './coffe-metodology.component.css',
})
export class CoffeMetodologyComponent {
  public phLabImagesCofe: string[] = [
    '/assets/img/Cafe(1)/1Cosecha/cafe.webp',
    '/assets/img/Cafe(1)/1Cosecha/20240612_162008_resultado.webp',
    '/assets/img/Cafe(1)/1Cosecha/20240612_091900_resultado.webp',
    '/assets/img/Cafe(1)/1Cosecha/20240612_085718_resultado.webp',
    '/assets/img/Cafe(1)/2Poscosecha/20240613_094933_resultado.webp',
    '/assets/img/Cafe(1)/2Poscosecha/20240613_095837_resultado.webp',
    '/assets/img/Cafe(1)/2Poscosecha/20240613_095935_resultado.webp',
    '/assets/img/Cafe(1)/2Poscosecha/20240828_093336_resultado.webp',
    '/assets/img/Cafe(1)/2Poscosecha/20240828_103738_resultado.webp',
    '/assets/img/Cafe(1)/3Beneficio/20240613_170559_resultado.webp',
    '/assets/img/Cafe(1)/3Beneficio/20240613_170801_resultado.webp',
    '/assets/img/Cafe(1)/3Beneficio/20240613_171332_resultado.webp',
  ];

  public ImageCoffe: string[] = [
    '/assets/img/Cafe(1)/7Secado/20240624_102509_resultado.webp',
    '/assets/img/Cafe(1)/7Secado/20240617_173319_resultado.webp',
    '/assets/img/Cafe(1)/7Secado/20240625_095225_resultado.webp',
    '/assets/img/Cafe(1)/7Secado/20240901_113925.webp',
  ];
}
