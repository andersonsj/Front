import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/Util/configuration';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, private configuration: Configuration) { }

  /** postIdentificarTienda(estacion: Estacion): Observable<Estacion> {
    return this.http.post<Estacion>(this.configuration.consultarTiendaPorIpApiUrl, estacion, { headers: this.httpHeaders });
  }*/

  postIdentificarTienda(): Observable<any> {
    /** return this.http.get<Estacion>(this.configuration.consultarTiendaPorIpApiUrl, { headers: this.httpHeaders });*/
    return this.http.get(this.configuration.consultarTiendaPorIpApiUrl);
  }
}
