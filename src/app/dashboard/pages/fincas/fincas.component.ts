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



  fotoFincaPreview: string | ArrayBuffer | null = null;
  fotoProductorPreview: string | ArrayBuffer | null = null;
  fotoProcesoFinPreview: string | ArrayBuffer | null = null;
  fotoProcesoPreview: string  | ArrayBuffer | null = null;
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

  // handleImageUpload(event: Event, tipo: string) {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (tipo === 'fotoFinca') {
  //         this.fotoFincaPreview = reader.result;
  //       } else if (tipo === 'fotoProductor') {
  //         this.fotoProductorPreview = reader.result;
  //       }else if (tipo === 'fotoProceso'){
  //         this.fotoProcesoPreview = reader.result;
  //       }else if (tipo === 'fotoProcesoFin') {
  //         this.fotoProcesoFinPreview = reader.result;
  //       }
  //     };
  //     reader.readAsDataURL(file); // Leer la imagen y generar la URL
  //   }
  // }
  handleImageUpload(event: Event, field: keyof Fincas) {
    const input = event.target as HTMLInputElement;
    
    if (input?.files?.length) {
      const file = input.files[0];
      const allowedMimeTypes = ['image/png', 'image/jpeg'];
      const maxSizeInBytes = 1048576; // 1 MB
  
      // Validar el tipo de archivo
      if (!allowedMimeTypes.includes(file.type)) {
        alert('Por favor, sube una imagen válida (PNG o JPEG)');
        return;
      }
  
      // Validar el tamaño del archivo
      if (file.size > maxSizeInBytes) {
        alert('El archivo es demasiado grande. El tamaño máximo es 1 MB.');
        return;
      }
  
      console.log('Archivo válido:', file);
  
      // Asignar el archivo al campo correspondiente (si es necesario)
      // this.fincaForm.get(field)?.setValue(file);
  
      // Leer la imagen y generar la URL para previsualización
      const reader = new FileReader();
      reader.onload = () => {
        // Aquí se asignan las URL de previsualización según el tipo
        if (field === 'fotoFinca') {
          this.fotoFincaPreview = reader.result as string;
        } else if (field === 'fotoProductor') {
          this.fotoProductorPreview = reader.result as string;
        } else if (field === 'fotoProceso') {
          this.fotoProcesoPreview = reader.result as string;
        } else if (field === 'fotoProcesoFin') {
          this.fotoProcesoFinPreview = reader.result as string;
        }
      };
      reader.readAsDataURL(file); // Leer la imagen y generar la URL
    }
  }
  
  
  resetForm() {
    this.fincaForm.reset();
    this.fotoFincaPreview = null;
    this.fotoProductorPreview = null;
  }
  handleSubmit() {
    if (this.fincaForm.invalid) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }
  
    const formData = new FormData();
  
    // Añadir todos los campos del formulario al FormData
    for (const key in this.fincaForm.controls) {
      const value = this.fincaForm.get(key)?.value;
      if (value !== null && value !== '') {
        formData.append(key, value);
      }
    }
  
    // Añadir imágenes solo si existen y son válidas
    const fotoFinca = this.fincaForm.get('fotoFinca')?.value;
    const fotoProductor = this.fincaForm.get('fotoProductor')?.value;
    const fotoProceso = this.fincaForm.get('fotoProceso')?.value;
    const fotoProcesoFin = this.fincaForm.get('fotoProcesoFin')?.value;
  
    if (fotoFinca && typeof fotoFinca === 'object' && 'name' in fotoFinca) {
      formData.append('fotoFinca', fotoFinca);
    }
    if (fotoProductor && typeof fotoProductor === 'object' && 'name' in fotoProductor) {
      formData.append('fotoProductor', fotoProductor);
    }
    if (fotoProceso && typeof fotoProceso === 'object' && 'name' in fotoProceso) {
      formData.append('fotoProceso', fotoProceso);
    }
    if (fotoProcesoFin && typeof fotoProcesoFin === 'object' && 'name' in fotoProcesoFin) {
      formData.append('fotoProcesoFin', fotoProcesoFin);
    }
  
    // Llamada al servicio para crear la finca
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



  getImagen(item: Fincas, tipoImagen: string): string {
    const baseUrl = 'http://localhost:3001'; // URL de tu backend
    const imagen = item["imagenes"].find((imagen: Imagenes) => imagen.tipoImagen === tipoImagen);
    
    // Si encuentra la imagen, devuelve la ruta completa
    return imagen ? `${baseUrl}${imagen.url}` : `${baseUrl}/uploads/goku.jpg`; // Ruta por defecto si no hay imagen
  }
  
  
}
