import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estacion } from '../../model/estacion';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/Util/configuration';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, private configuration: Configuration) { }

  postIdentificarTienda(estacion: Estacion): Observable<Estacion> {
    return this.http.post<Estacion>(this.configuration.consultarTiendaPorIpApiUrl, estacion, { headers: this.httpHeaders });
  }
}
