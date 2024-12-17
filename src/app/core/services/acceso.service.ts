import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AppSettings } from '../setting/Appsetting';
import { Observable } from 'rxjs';
import { ResponceAccess } from '../interface/ResponceAccess';
import { Usuario } from '../interface/usuario';
import { Login } from '../interface/Login';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  private http = inject(HttpClient);
  private baseUrl:string = AppSettings.ApiUrl;
  
  
  
  constructor() { }


  register(objeto:Usuario): Observable<ResponceAccess>{
return     this.http.post<ResponceAccess>(`${this.baseUrl}Acceso/register`, objeto)
  }

  Login(objeto:Login): Observable<ResponceAccess>{
    return this.http.post<ResponceAccess>(`${this.baseUrl}auth/login`, objeto)
  }

  saveToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }
   
}
