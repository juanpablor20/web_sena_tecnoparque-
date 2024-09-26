
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})

export class UsuarioService{
private apiUrl = 'http://localhost:3001/api/usuarios';
 private apiCreate = 'http://localhost:3001/api/usuarios/create';
constructor(private http: HttpClient){}


 obtenerUsuarios(page: number, limit: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
      return this.http.get<any>(this.apiUrl, {params});
 }




 crearUsuario(usuario: Usuario): Observable<Usuario> {
  return this.http.post<Usuario>(this.apiCreate, usuario);
 }

// actualizarUsuario(usuario: Usuario): Observable<Usuario>{

//   return this.http.patch<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);
// }
actualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
  return this.http.put<Usuario>(`${this.apiUrl}/usuarios/${id}`, usuario);
}


eliminarUsuario(id: number): Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

}
