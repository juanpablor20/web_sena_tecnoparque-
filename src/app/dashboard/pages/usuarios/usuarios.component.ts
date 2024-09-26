import { Component } from '@angular/core';
import { Usuario } from '../../../core/interface/usuario';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsuarioService } from '../../../core/services/usuario.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxPaginationModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export default class UsuariosComponent {
  isModalOpen = false;
  usuarios: Usuario[] = [];
  totalItems: number = 0;
  itemsPerPage: number = 1;
  currentPage: number = 10;
  lastPage: number = 1;
  paginationId: string = 'usuario-pagination';
  usuario: Usuario = {
    nombre: '',
    noDocumento: '',
    correo: '',
    telefono: '',
    rol: 'administrador',
    password: '',
  };

  // Formulario reactivo
  usuarioForms = new FormGroup({
    nombre: new FormControl('', Validators.required),
    noDocumento: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', Validators.required),
    rol: new FormControl('administrador', Validators.required),
    password: new FormControl('', Validators.required), // Solo requerido al crear
  });
  constructor(private usuarioService: UsuarioService,
              private toastService: ToastService
  ) {
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
        console.log(response);
        this.usuarios = response.data;
        this.totalItems = response.meta.total;
        this.lastPage = response.meta.lastPage;
      });
  }

  // Método para abrir el modal
  openModal(usuario?: Usuario) {
    this.isModalOpen = true;
    if (usuario) {
      // Si se pasa un usuario, estamos en modo de edición
      this.usuario = { ...usuario }; // Clonar el usuario
      this.usuarioForms.patchValue(this.usuario); // Rellenar el formulario con los datos
    } else {
      // Si no se pasa un usuario, estamos creando uno nuevo
      this.usuario = {
        nombre: '',
        noDocumento: '',
        correo: '',
        telefono: '',
        rol: 'administrador',
        password: '',
      };
      this.usuarioForms.reset(); // Limpiar el formulario
    }
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
    setTimeout(() => {
      this.isModalOpen = false;
    }, 300);
  }

  // Método para enviar el formulario (crear o actualizar)
    onSubmit() {
      if (this.usuarioForms.valid) {
        console.log('Formulario válido:', this.usuarioForms.value);
        
        // Datos del usuario a enviar
        const usuarioData: Usuario = {
          nombre: this.usuarioForms.value.nombre!,
          noDocumento: this.usuarioForms.value.noDocumento!.toString(),
          correo: this.usuarioForms.value.correo!,
          telefono: this.usuarioForms.value.telefono!.toString(),
          rol: this.usuarioForms.value.rol!,
          password: this.usuarioForms.value.password!,
        };
    
        if (this.usuario.id) {
          this.usuarioService.actualizarUsuario(this.usuario.id, usuarioData).subscribe({
            next: (response) => {
              console.log('Usuario actualizado:', response);
              this.cargarUsuarios();
              this.closeModal();
              this.toastService.showToast('Usuario actualizado con éxito', 'success');
            },
            error: (err) => {
              console.error('Error al actualizar usuario', err);
            },
          });
        } else {
          this.usuarioService.crearUsuario(usuarioData).subscribe({
            next: (response) => {
              console.log('Usuario creado:', response);
              this.cargarUsuarios();
              this.closeModal();
              this.toastService.showToast('Usuario creado con éxito', 'success');
            },
            error: (err) => {
              console.error('Error al crear usuario', err);
            },
          });
        }
      } else {
        console.error('Formulario no válido', this.usuarioForms.errors);
      }
    }
    
  
  
  
  editarUsuario(item: any) {
    this.usuario = { ...item }; // Copia los datos del usuario seleccionado
    this.openModal(); // Abre el modal para editar
  }

  // Método para eliminar un usuario
  eliminarUsuario(id: number) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');
  
    if (confirmacion) {
      this.usuarioService.eliminarUsuario(id).subscribe({
        next: () => {
          this.cargarUsuarios();
          this.toastService.showToast('Usuario eliminado con éxito', 'success');
        },
        error: (err) => {
          console.error('Error al eliminar usuario', err);
        }
      });
    }
  }
}
