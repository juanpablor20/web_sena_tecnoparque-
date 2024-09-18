import { FincasService } from './../../../core/services/fincas.service';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Fincas } from '../../../core/interface/fincas';

@Component({
  selector: 'app-fincas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.css'], // Corregido a 'styleUrls'
})
export default class FincasComponent {
  constructor(private fincasService: FincasService) {
    this.cargarFincas();
  }
  cargarFincas() {
    this.fincasService.obtenerfincas().subscribe((fincas) => {
      this.finca = fincas;
    });
  }

  finca: Fincas[] = [];
  fincas: Fincas = {
    municipio: '',
    vereda: '',
    nombreFinca: '',
    nombreProductor: '',
    edad: '',
    tipoProductor: '',
    detallesProducto: '',
    altitud: '',
    temperatura: '',
    imagen: '',
    estado: '',
  };

  fincaForm = new FormGroup({
    municipio: new FormControl('', Validators.required),
    vereda: new FormControl('', Validators.required),
    nombreFinca: new FormControl('', Validators.required),
    nombreProductor: new FormControl('', Validators.required),
    edad: new FormControl('', [Validators.required, Validators.min(18)]), // Ejemplo con validación de mínimo 18 años
    tipoProductor: new FormControl('', Validators.required),
    detallesProducto: new FormControl('', Validators.required),
    altitud: new FormControl('', Validators.required),
    temperatura: new FormControl('', Validators.required),
    imagen: new FormControl(null), // Para manejar la imagen
  });

  handleSubmit() {
    if (this.fincaForm.valid) {
      this.fincasService.crearFincas(this.fincas).subscribe(() => {
        this.cargarFincas();
        this.closeModal();
      });
      console.log(this.fincaForm.value);
      // Aquí puedes procesar los datos del formulario o enviarlos a un servidor
    }
  }

  // submitForm() {
  //   if (this.equipo.id) {
  //     this.equiposService.actualizarEquipo(this.equipo).subscribe(() => {
  //       this.cargarEquipos();
  //       this.closeModal();
  //     });
  //   } else {
  //     this.equiposService.crearEquipo(this.equipo).subscribe(() => {
  //       this.cargarEquipos();
  //       this.closeModal();
  //     });
  //   }
  // }
  handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input?.files?.length) {
      const file = input.files[0];

      // Validar si el archivo es una imagen
      const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!allowedMimeTypes.includes(file.type)) {
        alert('Por favor, sube una imagen válida (PNG o JPEG)');
        return;
      }

      // Validar el tamaño del archivo (opcional, en bytes, por ejemplo, 1 MB = 1048576 bytes)
      const maxSizeInBytes = 1048576; // 1 MB
      if (file.size > maxSizeInBytes) {
        alert(
          'El archivo es demasiado grande. El tamaño máximo permitido es 1 MB.'
        );
        return;
      }

      // Aquí puedes continuar con el proceso de carga, si todo es válido
      console.log('Archivo válido:', file);
    }
  }

  isModalOpen = false;

  // Método para manejar la subida de imagen

  // Abrir modal
  openModal() {
    this.isModalOpen = true;
  }

  // Cerrar modal
  closeModal() {
    this.isModalOpen = false;
  }
}
