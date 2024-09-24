import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FincasService } from './../../../core/services/fincas.service';
import { Fincas } from '../../../core/interface/fincas';
import { NgxPaginationModule } from 'ngx-pagination';
import { Imagenes } from '../../../core/interface/imagenes';

@Component({
  selector: 'app-fincas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxPaginationModule],
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.css'],
})
export default class FincasComponent implements OnInit {
  finca: Fincas[] = [];
  totalItems: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 50;
  lastPage: number = 1;
  paginationId: string = 'finca-pagination';
  isModalOpen = false;
  
  fincaForm = new FormGroup({
    municipio: new FormControl('', Validators.required),
    vereda: new FormControl('', Validators.required),
    nombreFinca: new FormControl('', Validators.required),
    nombreProductor: new FormControl('', Validators.required),
    edad: new FormControl('', [Validators.required, Validators.min(18)]),
    tipoProductor: new FormControl('', Validators.required),
    detallesProducto: new FormControl('', Validators.required),
    altitud: new FormControl('', Validators.required),
    temperatura: new FormControl('', Validators.required),
    fotoFinca: new FormControl(null),
    fotoProductor: new FormControl(null),
    fotoProceso: new FormControl(null),
    fotoProcesoFin: new FormControl(null),
  });

  constructor(private fincasService: FincasService) {
    this.obtenerFincas();
  }

  ngOnInit() {
    this.obtenerFincas();
  }

  obtenerFincas() {
    this.fincasService.obtenerFincas(this.currentPage, this.itemsPerPage).subscribe(response => {
      this.finca = response.data;
      this.totalItems = response.meta.total;
      this.lastPage = response.meta.lastPage;
    });
  }

  cambiarPagina(page: number) {
    if (page > 0 && page <= this.lastPage) {
      this.currentPage = page;
      this.obtenerFincas();
    }
  }

  handleImageUpload(event: Event, field: keyof Fincas) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      const allowedMimeTypes = ['image/png', 'image/jpeg'];
      const maxSizeInBytes = 1048576; // 1 MB

      if (!allowedMimeTypes.includes(file.type)) {
        alert('Por favor, sube una imagen válida (PNG o JPEG)');
        return;
      }

      if (file.size > maxSizeInBytes) {
        alert('El archivo es demasiado grande. El tamaño máximo es 1 MB.');
        return;
      }

      console.log('Archivo válido:', file);
     // this.fincaForm.get(field)?.setValue(file); // Asigna el archivo al campo correspondiente
    }
  }
  handleSubmit() {
    if (this.fincaForm.invalid) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }
  
    const formData = new FormData();
    for (const key in this.fincaForm.controls) {
      const value = this.fincaForm.get(key)?.value;
      if (value !== null && value !== '') {
        formData.append(key, value);
      }
    }
    
    // // Añadir imágenes solo si existen y son válidas
    // if (this.fincas.fotoFinca instanceof File) {
    //   formData.append('fotoFinca', this.fincas.fotoFinca);
    // }
    // if (this.fincas.fotoProductor instanceof File) {
    //   formData.append('fotoProductor', this.fincas.fotoProductor);
    // }
    // if (this.fincas.fotoProceso instanceof File) {
    //   formData.append('fotoProceso', this.fincas.fotoProceso);
    // }
    // if (this.fincas.fotoProcesoFin instanceof File) {
    //   formData.append('fotoProcesoFin', this.fincas.fotoProcesoFin);
    // }
  
    this.fincasService.crearFincas(formData).subscribe({
      next: () => {
        this.obtenerFincas();
        this.closeModal();
      },
      error: (err) => {
        console.error('Error al crear la finca:', err);
        alert('Ocurrió un error al crear la finca: ' + (err.error.message?.join(', ') || 'Error desconocido'));
      }
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.fincaForm.reset(); // Limpiar el formulario al cerrar el modal
  }

  // getImagen(item: Fincas, tipoImagen: string): string {
  //   const imagen = item["imagenes"].find((imagen: Imagenes) => imagen.tipoImagen === tipoImagen);
  //   return imagen ? '' + imagen.url : '/uploads/goku.jpg'; // Ruta por defecto si no hay imagen
  // }


  getImagen(item: Fincas, tipoImagen: string): string {
    const baseUrl = 'http://localhost:3001'; // URL de tu backend
    const imagen = item["imagenes"].find((imagen: Imagenes) => imagen.tipoImagen === tipoImagen);
    
    // Si encuentra la imagen, devuelve la ruta completa
    return imagen ? `${baseUrl}${imagen.url}` : `${baseUrl}/uploads/goku.jpg`; // Ruta por defecto si no hay imagen
  }
  
  
}
