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

  iniciarSesion() {
   if (this.formLogin.invalid)      return;
   
    const object: Login = {
      correo: this.formLogin.value.correo,
      password: this.formLogin.value.password,
    };
    
    this.accesoService.Login(object).subscribe({
      next: (data) => {
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          this.router.navigate(['dashboard']);
        } else {
          alert('Usuario o contraseña incorrectos');
        }

        error: (error: any) => {
          console.log(error.message);
        };
      },
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
