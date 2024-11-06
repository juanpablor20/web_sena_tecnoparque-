import { Component } from '@angular/core';
import { Usuario } from '../../../core/interface/usuario';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../core/services/usuario.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmService } from '../../../core/services/confirm.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxPaginationModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export default class UsuariosComponent {
  isModalOpen = false;
  usuarios: Usuario[] = [];
  totalItems: number = 0;
  itemsPerPage: number = 10; // Aumentar para que se muestren más usuarios por página
  currentPage: number = 1; // Establecer a 1 para iniciar desde la primera página
  lastPage: number = 1;
  paginationId: string = 'usuario-pagination';
  usuario: Usuario = {
    id: 0, // Asegúrate de incluir la propiedad `id`
    nombre: '',
    noDocumento: '',
    correo: '',
    telefono: '',
    rol: 'administrador',
    password: '',
  };

  usuarioForms = new FormGroup({
    nombre: new FormControl('', Validators.required),
    noDocumento: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', Validators.required),
    rol: new FormControl('administrador', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private usuarioService: UsuarioService,
    private confirmService: ConfirmService,
     private toastService: ToastService) {
    this.cargarUsuarios();
  }

  cambiarPagina(page: number) {
    if (page > 0 && page <= this.lastPage) {
      this.currentPage = page;
      this.cargarUsuarios();
    }
  }

  cargarUsuarios() {
    this.usuarioService
      .obtenerUsuarios(this.currentPage, this.itemsPerPage)
      .subscribe((response) => {
        this.usuarios = response.data;
        this.totalItems = response.meta.total;
        this.lastPage = response.meta.lastPage;
      });
  }

  openModal(usuario?: Usuario) {
    this.isModalOpen = true;
    if (usuario) {
      this.usuario = { ...usuario }; 
      this.usuarioForms.patchValue(this.usuario); 
    } else {
      this.usuarioForms.reset();
      this.usuario = {
        id: 0,
        nombre: '',
        noDocumento: '',
        correo: '',
        telefono: '',
        rol: 'administrador',
        password: '',
      };
    }
  }

  closeModal() {
    this.isModalOpen = false;
    setTimeout(() => {
      this.isModalOpen = false;
    }, 300);
  }
  onSubmit(){}

  // onSubmit() {
  //   // if (this.usuarioForms.valid) {
  //   //   const usuarioData: Usuario = {
  //   //     ...this.usuarioForms.value,
  //   //     noDocumento: this.usuarioForms.value.noDocumento.toString(),
  //   //     telefono: this.usuarioForms.value.telefono.toString(),
  //   //   };

  //     if (this.usuario.id) {
  //       this.usuarioService.actualizarUsuario(this.usuario.id, usuarioData).subscribe({
  //         next: (response) => {
  //           this.cargarUsuarios();
  //           this.closeModal();
  //           this.toastService.showToast('Usuario actualizado con éxito', 'success');
  //         },
  //         error: (err) => console.error('Error al actualizar usuario', err),
  //       });
  //     } else {
  //       this.usuarioService.crearUsuario(usuarioData).subscribe({
  //         next: (response) => {
  //           this.cargarUsuarios();
  //           this.closeModal();
  //           this.toastService.showToast('Usuario creado con éxito', 'success');
  //         },
  //         error: (err) => console.error('Error al crear usuario', err),
  //       });
  //     }
  //   } else {
  //     console.error('Formulario no válido', this.usuarioForms.errors);
  //   }
  // }

  editarUsuario(item: Usuario) {
    this.openModal(item);
  }

  // eliminarUsuario(id: number) {

  //   this.toastService.confirm('¿Estás seguro de que deseas eliminar este usuario?', () => {
  //     // Lógica para eliminar el usuario aquí
  //     this.toastService.showToast('Usuario eliminado', 'success');
  //   });
  // }
  eliminarUsuario() {
    this.confirmService.confirm('¿Estás seguro de que deseas eliminar este usuario?', () => {
      // Lógica para eliminar el usuario
      this.toastService.showToast('Usuario eliminado con éxito', 'success');
    });
  }
}


