import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-microorganismos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './microorganismos.component.html',
  styleUrl: './microorganismos.component.css'
})
export class MicroorganismosComponent {

 public levaduras = [

  {
   
    title: 'Mirador Monte Café',
    description:'Levadura utilizada en la fermentación de cacao',
    image: 'assets/img/banner-1.webp',
    link: 'https://lalcocoayeast.com/es/products/',
   
  },

  {
    title: 'Fermentación con levadura MATUNDA',
    description: 'Levadura utilizada en la fermentación de cacao',
    image: 'assets/img/banner-2.webp',
    link: 'https://lalcocoayeast.com/es/products/',
  },

  {
    title: 'Fermentación con levadura CIMA',
    description: 'Levadura utilizada en la fermentación de Café',
    image: 'assets/img/banner-3.webp',
    link: 'https://www.lalcafeyeast.com/es/products/',
  },	
  {
    title: 'Fermentación con levadura INTENSO',
    description: 'Levadura utilizada en la fermentación de Café',
    image: 'assets/img/banner-4.webp',
    link: 'https://www.lalcafeyeast.com/es/products/',
  }

 ];


}
