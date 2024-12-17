



import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccesoService } from '../services/acceso.service';
 // Servicio de autenticación

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AccesoService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Permitir acceso
    } else {
      this.router.navigate(['/login']); // Redirigir al login si no está autenticado
      return false;
    }
  }
}
