import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Autenticar } from '../../model/autenticar';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/Util/configuration';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private configuration: Configuration) { }

  postAutenticar(autenticar: Autenticar): Observable<Autenticar> {
    return this.http.post<Autenticar>(this.configuration.validarEmpleadoApiUrl, autenticar, { headers: this.httpHeaders });
  }

  getAutenticar(): Observable<any> {
    return this.http.get(this.configuration.consultaIdEmpleApiUrl);
  }

}
