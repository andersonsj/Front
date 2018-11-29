import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProductoService } from 'src/app/core/services/producto/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListarProductoComponent implements OnInit {

  @Input() productoBuscar: string;

  public buscar: string;
  private datos: any;
  private cantidadProducto: any = 1;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.buscar = localStorage.getItem('buscar');
    this.buscarProducto();
    console.log('Paso de un tes a otro');
    console.log(this.productoBuscar);
  }

  buscarProducto() {
    this.productoService.getBuscarProductos(this.buscar).subscribe(
      (data) => {
        this.datos = data.value;
      }
    );
  }

  restarCantidad() {
    if (this.cantidadProducto > 1) {
      this.cantidadProducto = this.cantidadProducto - 1;
    }
  }

  sumarCantidad() {
    this.cantidadProducto = this.cantidadProducto + 1;
  }

  getMensaje(e) {
    this.buscar = localStorage.getItem('buscar');
    this.buscarProducto();
  }

}
