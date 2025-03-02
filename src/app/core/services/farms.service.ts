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
      description: 'Ubicado en las montañas del Huila, este productor se especializa en café de alta calidad cultivado a más de 1,800 metros sobre el nivel del mar. Tipo de productor: Caficultor artesanal con prácticas sostenibles.',
      link: '/estate/1',
      backGroundimage: '/assets/img/images.jpg',
      imagen2: '/assets/img/cafe1.jpg',
      imagen3: '/assets/img/carousel-2.webp',
      altitude: '1,800 - 2,000 msnm',
      variety: 'Caturra, Castillo, Bourbon',
      process: 'Lavado, Honey, Natural',
      flavorProfile: 'Notas a chocolate, frutos rojos y caramelo con una acidez brillante y cuerpo balanceado.',
      sustainability: 'Comprometidos con la producción sostenible, utilizando métodos ecológicos y fomentando el comercio justo.',
      contact: {
        phone: '+57 320 456 7890',
        email: 'info@miradormontecafe.com'
      }
    },
    {
      id: 2,
      name: 'Finca El Alto',
      image: '/assets/img/cafe1.jpg',
      description: 'Enclavada en las colinas cafeteras de Colombia, esta finca produce un café de origen único con un proceso de fermentación controlada para realzar sus sabores afrutados.',
      link: '/estate/2',
      backGroundimage: '/assets/img/cafe1.jpg',
      imagen2: '/assets/img/cafe3.jpg',
      imagen3: '/assets/img/carousel-2.webp',
      altitude: '1,600 - 1,900 msnm',
      variety: 'Gesha, Tabi, Colombia',
      process: 'Anaeróbico, Natural',
      flavorProfile: 'Aromas florales con notas de frutas tropicales y un dulzor intenso.',
      sustainability: 'Manejo agroforestal para la conservación del ecosistema y prácticas de comercio justo.',
      contact: {
        phone: '+57 310 567 2345',
        email: 'contacto@fincaelalto.com'
      }
    },
    {
      id: 3,
      name: 'Reserva La Montaña',
      image: '/assets/img/cafe3.jpg',
      description: 'Productor de café especial cultivado bajo sombra natural, lo que permite un crecimiento lento y una mayor concentración de sabores.',
      link: '/estate/3',
      backGroundimage: '/assets/img/cafe3.jpg',
      imagen2: '/assets/img/cafe1.jpg',
      imagen3: '/assets/img/carousel-2.webp',
      altitude: '1,500 - 1,750 msnm',
      variety: 'Bourbon, Castillo, Typica',
      process: 'Lavado, Honey',
      flavorProfile: 'Notas a nueces, panela y frutos secos con un retrogusto prolongado.',
      sustainability: 'Enfoque en la agroforestería y producción orgánica.',
      contact: {
        phone: '+57 322 678 9012',
        email: 'info@reservalamontana.com'
      }
    },
    {
      id: 4,
      name: 'Cacao del Valle',
      image: '/assets/img/cacao1.jpg',
      description: 'Una finca familiar que produce cacao fino de aroma con fermentaciones controladas para obtener un chocolate con notas complejas y únicas.',
      link: '/estate/4',
      backGroundimage: '/assets/img/cacao1.jpg',
      imagen2: '/assets/img/section-3-cacao.webp',
      imagen3: '/assets/img/Cacao(1)/1poscosecha/3.webp',
      altitude: '800 - 1,200 msnm',
      variety: 'Criollo, Trinitario',
      process: 'Fermentación controlada, Secado al sol',
      flavorProfile: 'Notas a frutos secos, caramelo y un toque floral.',
      sustainability: 'Producción sostenible con certificación orgánica.',
      contact: {
        phone: '+57 315 789 6543',
        email: 'info@cacaodelvalle.com'
      }
    },
    {
      id: 5,
      name: 'Hacienda Aroma Cacao',
      image: '/assets/img/cacao2.jpg',
      description: 'Ubicada en una región de suelos volcánicos, esta hacienda se especializa en cacao de alta calidad con perfiles sensoriales únicos.',
      link: '/estate/5',
      backGroundimage: '/assets/img/cacao2.jpg',
      imagen2: '/assets/img/Cacao(1)/1poscosecha/5.webp',
      imagen3: '/assets/img/Cacao(1)/1poscosecha/1.webp',
      altitude: '900 - 1,300 msnm',
      variety: 'Forastero, Trinitario',
      process: 'Secado al sol, Tostado artesanal',
      flavorProfile: 'Chocolate intenso con notas de especias y frutos rojos.',
      sustainability: 'Enfoque en la biodiversidad y conservación de bosques nativos.',
      contact: {
        phone: '+57 318 234 5678',
        email: 'contacto@haciendaaromacacao.com'
      }
    },
    {
      id: 6,
      name: 'Finca Dulce Cacao',
      image: '/assets/img/cacao3.jpg',
      description: 'Esta finca produce cacao de origen con una fermentación cuidadosamente controlada para lograr un perfil de sabor balanceado y suave.',
      link: '/estate/6',
      backGroundimage: '/assets/img/cacao3.jpg',
      imagen2: '/assets/img/section-3-cacao.webp',
      imagen3: '/assets/img/Cacao(1)/1poscosecha/3.webp',
      altitude: '700 - 1,100 msnm',
      variety: 'Criollo, Nacional',
      process: 'Fermentación en madera, Secado solar',
      flavorProfile: 'Dulce con toques de miel y almendras.',
      sustainability: 'Prácticas agroecológicas para un cacao más saludable y sostenible.',
      contact: {
        phone: '+57 319 456 7890',
        email: 'info@fincadulcecacao.com'
      }
    }
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
