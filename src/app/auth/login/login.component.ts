import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AccesoService } from '../../core/services/acceso.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../../core/interface/Login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private accesoService = inject(AccesoService);
  private router = inject(Router);
  public formBuilder = inject(FormBuilder);

  public formLogin: FormGroup = this.formBuilder.group({
    correo: ['', Validators.required],
    password: ['', Validators.required],
  });

  public errorMessage: string | null = null; // Variable para el mensaje de error

  iniciarSesion() {
    if (this.formLogin.invalid) {
      return;
    }

    const object: Login = {
      correo: this.formLogin.value.correo,
      password: this.formLogin.value.password,
    };

    this.accesoService.Login(object).subscribe({
      next: (data) => {
        if (data.accessToken) {
          this.accesoService.saveToken(data.accessToken);
          this.router.navigate(['dashboard']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos'; // Mensaje de error
        }
      },
      error: (error) => {
        this.errorMessage = 'Error al iniciar sesión. Inténtelo de nuevo.'; // Mensaje de error
        console.error(error.message);
      },
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
