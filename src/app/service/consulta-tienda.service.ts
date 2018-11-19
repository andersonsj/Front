import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estacion } from 'src/app/model/estacion';
import { Configuration } from 'src/app/Util/configuration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class consultaTiendaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private configuration: Configuration) { 
    console.log('Servicio ConsultaTienda Funcionando');
  }

  getConsultarTienda(Estacion: Estacion): Observable<Estacion> {
    return this.http.post<Estacion>(this.configuration.consultarTiendaPorIp, Estacion, { headers: this.httpHeaders });
  }
}
