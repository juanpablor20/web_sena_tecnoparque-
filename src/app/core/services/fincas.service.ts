import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Fincas } from '../interface/fincas';

@Injectable({
  providedIn: 'root'
})
export class FincasService {
  private apiUrl = 'http://localhost:3001/api/fincas';
  private apiUrlCreate = 'http://localhost:3001/api/fincas/create';

  constructor(private http: HttpClient) { }

  // obtenerFincas(): Observable<Fincas[]> {
  //   // El tipo ahora refleja la estructura correcta del objeto devuelto por la API
  //   return this.http.get<{ data: Fincas[] }>(this.apiUrl).pipe(
  //     // Extraer solo el array 'data'
  //     map(response => response.data)
  //   );
  // }
  // obtenerFincas(pagina: number = 1, limite: number = 10): Observable<any> {
  //   let params = new HttpParams().set('page', pagina).set('limit', limite);
  //   return this.http.get<any>(this.apiUrl, { params });
  // }

  // obtenerFincas(page: number = 1, itemsPerPage: number = 10): Observable<any> {
  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('limit', itemsPerPage.toString());

  //   return this.http.get<any>(this.apiUrl, { params });
  // }

  obtenerFincas(page: number, limit: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(this.apiUrl, { params });
  }
  

  crearFincas(fincas: Fincas): Observable<Fincas> {
    return this.http.post<Fincas>(this.apiUrlCreate, fincas);
  }
}
