import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../../../app/core/services/producto/producto.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public buscar: string;
  private datos: any;
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
  }

  buscarProducto() {

    this.productoService.getBuscarProductos(this.buscar).subscribe(
      (data) => {
        this.datos = data.value;
        console.log(this.datos);
        console.log(data);

      }
    );
  }

}
