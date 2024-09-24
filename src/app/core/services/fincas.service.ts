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

  obtenerFincas(page: number, limit: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(this.apiUrl, { params });
  }

  crearFincas(formData: FormData): Observable<Fincas> {
    return this.http.post<Fincas>(this.apiUrlCreate, formData);
  }
}
