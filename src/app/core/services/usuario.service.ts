
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Usuario } from '../interface/usuario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettings } from '../setting/Appsetting';



@Injectable({
    providedIn: 'root'
})

export class UsuarioService{

private baseUrl: string = AppSettings.ApiUrl;

private apiUrl = 'http://localhost:3001/api/usuarios';
 private apiCreate = 'http://localhost:3001/api/usuarios/create';
constructor(private http: HttpClient){}

 obtenerUsuarios(page: number, limit: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
      return this.http.get<any>(this.apiUrl, {params});
 }


actualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
  return this.http.put<Usuario>(`${this.baseUrl}/usuarios/${id}`, usuario);

}
crearUsuario(usuario: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>(`${this.baseUrl}/usuario`, usuario)
}

private handleError(error: any) {
  console.error('Error en la solicitud', error);
  return throwError(() => new Error('Algo salió mal; por favor intenta nuevamente más tarde.'));
}

eliminarUsuario(id: number): Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

}
