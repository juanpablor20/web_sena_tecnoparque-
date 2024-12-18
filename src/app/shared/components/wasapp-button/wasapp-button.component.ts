import { Component } from '@angular/core';

@Component({
  selector: 'app-wasapp-button',
  standalone: true,
  imports: [],
  templateUrl: './wasapp-button.component.html',
  styleUrl: './wasapp-button.component.css'
})
export class WasappButtonComponent {


  phoneNumber: string = '573192575612'; // Reemplaza con tu número (sin + y sin espacios)
  message: string = '¡Hola! Me gustaría saber más información sobre el uso de microorganismos en veneficio de Cacao y Café.';
  whatsappLink: string = '';

  constructor() {
    // Construir enlace de WhatsApp
    this.whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
  }
}
