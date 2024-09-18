import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export  default class BlockComponent {
  isModalOpen = false;
  selectedFile: File | null = null;
  titulo: string = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File selected:', this.selectedFile);
    }
  }

  onSubmit() {
    if (this.selectedFile && this.titulo) {
      // Aquí deberías manejar la subida del archivo
      console.log('Título:', this.titulo);
      console.log('Archivo a subir:', this.selectedFile);
      // Lógica para subir el archivo (por ejemplo, usando FormData)
    }
  }

}
