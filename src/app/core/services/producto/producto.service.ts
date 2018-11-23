import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../../model/producto';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/Util/configuration';

@Injectable({
  providedIn: 'root'
}) 
export class ProductoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, private configuration: Configuration) { }
    
  /*getBuscarProductos(prod: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.configuration.consutarCatalogoApiUrl, prod, { headers: this.httpHeaders });
  }*/
 
  getBuscarProductos(producto: any): Observable<any> {
    console.log("info producto: "+producto);
      return this.http.get(this.configuration.consutarCatalogoApiUrl+producto+"&$filter=idZona%20eq%2041&$top=10&$skip=20&$count=true&$select=sku,nombre,precio,ficha");
    }
}
  