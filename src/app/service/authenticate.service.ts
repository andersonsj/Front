import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Autenticar } from 'src/app/Model/Autenticar';
import { Observable } from 'rxjs';

import { Configuration } from 'src/app/Util/configuration';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private configuration: Configuration) {
    console.log('Servicio Login Funcionando');
  }

  postAutenticar(autenticar: Autenticar): Observable<Autenticar> {
    return this.http.post<Autenticar>(this.configuration.validarEmpleadoApiUrl, autenticar, { headers: this.httpHeaders });
  }
}
