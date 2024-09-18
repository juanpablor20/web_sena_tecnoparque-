import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados-investigacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados-investigacion.component.html',
  styleUrl: './resultados-investigacion.component.css'
})
export default class ResultadosInvestigacionComponent {


  isModalOpen = false; 



  openModal(){
    this.isModalOpen = true;

  }


  closeModal(){
    this.isModalOpen = false;
  }
}
