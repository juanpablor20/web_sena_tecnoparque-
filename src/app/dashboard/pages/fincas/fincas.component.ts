import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FincasService } from './../../../core/services/fincas.service';
import { Fincas } from '../../../core/interface/fincas';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-fincas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,  NgxPaginationModule],
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.css'],
})
export default class FincasComponent implements OnInit {


  // Definir finca como array de Fincas
  finca: Fincas[] = [];
  data: Fincas[] = [];

  totalItems: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 3;
  lastPage: number = 1;
  paginationId: string = 'finca-pagination'; // Definir un ID único
  fincas: Fincas = {municipio: '',  vereda:'', nombreFinca: '', nombreProductor:'',    edad: '', tipoProductor: '', detallesProducto: '', altitud: '', temperatura:'', imagen: ''  }
  constructor(private fincasService: FincasService) {
    this.obtenerFincas();
  }
  ngOnInit() {
    this.obtenerFincas();
  }

  // obtenerFincas() {
  //   this.fincasService.obtenerFincas(this.currentPage, this.itemsPerPage).subscribe(response => {
  //     this.finca = response.data;
  //     this.totalItems = response.meta.total;
  //     this.lastPage = response.meta.lastPage;
  //   });
  // }


  obtenerFincas() {
    this.fincasService.obtenerFincas(this.currentPage, this.itemsPerPage).subscribe(response => {
      this.finca = response.data;
      this.totalItems = response.meta.total; // Set the totalItems property
      this.lastPage = response.meta.lastPage;
    });
  }
  // cambiarPagina(page: number) {
  //   if (page > 0 && page <= this.lastPage) {
  //     this.currentPage = page;
  //     this.obtenerFincas();
  //   }
  // }
  // cambiarPagina(page: number) {
  //   if (page > 0 && page <= this.lastPage) {
  //     this.currentPage = page;
  //     this.obtenerFincas();
  //   }
  // }
  cambiarPagina(page: number) {
    this.currentPage = page;
    this.obtenerFincas();
  }

 

  // Formulario reactivo con los campos requeridos
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
    imagen: new FormControl(null),
  });

  isModalOpen = false;


  handleSubmit(){
    this.fincasService.crearFincas(this.fincas).subscribe(() => {
      this.obtenerFincas();
      this.closeModal();
    })
  }
 
  handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      // Validar el archivo
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
      // Aquí puedes continuar con el proceso de subir la imagen
    }
  }

  // Abrir y cerrar modal
  openModal() {
    this.isModalOpen = true;
  }
 
  closeModal() {
    this.isModalOpen = false;
  }
}





 


  

  

  

