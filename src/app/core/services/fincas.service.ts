import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fincas } from '../interface/fincas';

@Injectable({
  providedIn: 'root'
})
export class FincasService {
  private apiUrl = 'http://localhost:3000/fincas';
  private apiUrlCreate = 'http://localhost:3000/fincas/create';

  constructor(private http: HttpClient) { }

  obtenerfincas(): Observable<Fincas[]> {
    return this.http.get<Fincas[]>(this.apiUrl);
  }

  crearFincas(fincas: Fincas): Observable<Fincas> {
    return this.http.post<Fincas>(this.apiUrlCreate, fincas);
  }
}
