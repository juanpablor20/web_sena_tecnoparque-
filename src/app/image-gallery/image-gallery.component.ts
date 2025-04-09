import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  templateUrl: './image-gallery.component.html',
  imports: [NgOptimizedImage],
styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {
  @Input() images: string[] = []; // Las imágenes vendrán desde el padre
  @Input() width: number = 400; // Ancho por defecto de las imágenes
  @Input() height: number = 200; // Alto por defecto de las imágenes
  @Input() sectionHeight: number = 450; // Altura de la sección
  @Input() gap: number = 5; // Espacio entre imágenes
}