
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';



@Injectable({
    providedIn: 'root'
})

export class UsuarioService{
// private apiUrl = 'http://localhost:3000/usuarios';
// private dr = 'http://localhost:300/usuarios/id';

//constructor(private http: HttpClient){}



//  getUsers(): Observable<Usuario[]>{
//    return this.http.get<Usuario[]>(this.apiUrl);



    
// }
// createUser(programa: Users): Observable<Users> {
//     return this.http.post<Users>(this.apiUrl, programa);
//   }

//   updateUser(id: number, userData: any): Observable<any> {
//     return this.http.put(`/api/users/${id}`, userData);
//   }

//   // Obtener un usuario por su ID
//   getUserById(id: number): Observable<Users> {
//     return this.http.get<Users>(`${this.apiUrl}/${id}`);
//   }



//   obtenerEquipoPorId(id: number): Observable<Equipo> {
//     return this.http.get<Equipo>(`${this.apiUrl}/${id}`);
//   }

  

//   eliminarEquipo(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
}
