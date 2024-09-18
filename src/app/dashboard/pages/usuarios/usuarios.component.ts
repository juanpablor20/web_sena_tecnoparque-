import { Component } from '@angular/core';
import { Usuario } from '../../../core/interface/usuario';
import { UsuarioService } from '../../../core/services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export  default class UsuariosComponent {
 isModalOpen = false;

 usuario: Usuario[] =[];
usuarios: Usuario = {nombre: '', apellido: '',  correo: '', telefono: '', estado: '', rol: '', password: ''};

constructor(private usuarioService: UsuarioService){
  //this.cargarUsuarios();
}
openModal(){
  this.isModalOpen = true;
}
closeModal(){
  this.isModalOpen = false;
  this.usuarios = {nombre: '', apellido: '',  correo: '', telefono: '', estado: '', rol: '', password: ''};
}
submitForm(){
//   if (this.usuarios.id) {
//     this.usuarioService.actualizarUsuario(this.usuarios).subscribe(() => {
//       this.cargarUsuarios();
//       this.closeModal();
//     });
//   } else {
//     this.usuarioService.crearUsuario(this.usuarios).subscribe(() => {
//       this.cargarUsuarios();
//       this.closeModal();
//     });
//   }
// }

}
}


// constructor(private equiposService: EquiposService) {
//   this.cargarEquipos();
// }

// cargarEquipos() {
//   this.equiposService.obtenerEquipos().subscribe(equipos => {
//     this.equipos = equipos;
//   });
// }


// closeModal() {
//   this.isModalOpen = false;
//   this.equipo = { tipo_equipo: '', caracteristicas: '',  numero_serie: '', estado: '' };
// }

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

// editarEquipo(equipo: Equipo) {
//   this.equipo = { ...equipo };
//   this.openModal();
// }

// eliminarEquipo(id: number) {
//   this.equiposService.eliminarEquipo(id).subscribe(() => {
//     this.cargarEquipos();
//   });
// }