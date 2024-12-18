import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmsService {
  constructor() {}
  private estates = [
    {
      id: 1,
      name: 'Mirador Monte Café',
      image: '/assets/img/images.jpg',
      description: 'Tipo de Productor: cafetero',
      link: '/estate/1',
      backGroundimage: '/assets/img/images.jpg',
      imagen2: '/assets/img/finca_cafe/Finca1Cafe.jpg',
      imagen3: '/assets/img/finca_cafe/Finca1Cafe.jpg'
    },
    {
      id: 2,
      name: 'La Argentina',
      image: '/assets/img/cafe1.jpg',
      description: 'Tipo de Productor: cafetero.',
      link: '/estate/1',
      backGroundimage: '/assets/img/cafe1.jpg',
      imagen2: '/assets/img/finca_cafe/Finca2.jpg',
      imagen3: '/assets/img/finca_cafe/Finca2.jpg'
    },
    {
      id: 3,
      name: 'Buena vista',
      image: '/assets/img/cafe3.jpg',
      description: 'Tipo de Productor: cafetero',
      link: '/estate/1',
      backGroundimage: '/assets/img/finca_cafe/Finca3.jpg',
      imagen2: '/assets/img/finca_cafe/Finca3.jpg',
      imagen3: '/assets/img/finca_cafe/Finca3.jpg'
    },
    {
      id: 4,
      name: ' La Vega',
      image: '/assets/img/cacao1.jpg',
      description: 'Tipo de Productor: cacaotero.',
      prueba: ' por franklin cuellar ',
      link: '/estate/2',
    },
    {
      id: 5,
      name: 'Centro de Formación Agroindustrial La Angostura',
      image: '/assets/img/cacao2.jpg',
      description: 'Tipo de Productor: cacaotero.',
      link: '/estate/3',
    },
    {
      id: 6,
      name: 'San Rafael',
      image: '/assets/img/cacao3.jpg',
      description: 'Tipo de Productor: cacaotero.',
      link: '/estate/4',
    },
    
    
  ];

  getEstates(): Observable<any[]> {
    return of(this.estates);
  }

  // Method to get an estate by ID
  getEstateById(id: number): Observable<any> {
    const estate = this.estates.find((estate) => estate.id === id);
    return of(estate);
  }
}
