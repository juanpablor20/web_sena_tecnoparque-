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
      name: 'finca 1',
      image: '/assets/img/imagen1.jpg',
      description: 'Description of estate 1.',
      link: '/estate/1',
      backGroundimage: '/assets/img/imagen1.jpg',
      imagen2: '/assets/img/imagen1.jpg',
      imagen3: '/assets/img/imagen1.jpg'
    },
    {
      id: 2,
      name: 'finca 2',
      image: '/assets/img/imagen2.jpg',
      description: 'Description of estate 2.',
      link: '/estate/2',
    },
    {
      id: 3,
      name: 'finca 3',
      image: '/assets/img/imagen3.jpg',
      description: 'Description of estate 3.',
      link: '/estate/3',
    },
    {
      id: 4,
      name: 'finca 4',
      image: '/assets/img/imagen1.jpg',
      description: 'Description of estate 4.',
      link: 'dashboard',
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
