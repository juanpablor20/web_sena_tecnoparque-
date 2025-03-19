import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { WasappButtonComponent } from '../../../shared/components/wasapp-button/wasapp-button.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FooterComponent, WasappButtonComponent, NavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
  
})

export class ContactsComponent {
  submitted = false; // Variable para controlar si el formulario ha sido enviado
  message: string | null = null; // Mensaje de éxito

  // Definición del formulario
  ContactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  // Método para enviar el formulario
  submitForm() {
    this.submitted = true; 

    if (this.ContactForm.invalid) {
      return; 
    }

    // Simular envío del formulario a un back-end
    this.message = 'Gracias por contactarnos, pronto nos estaremos en contacto.';
    this.submitted = false;
    this.ContactForm.reset(); 

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      this.message = null;
    }, 5000); 
  }
 
}