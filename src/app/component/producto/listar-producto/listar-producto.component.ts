import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/core/services/producto/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
 
  public buscar: string;
  private datos: any;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {

    this.buscar = localStorage.getItem('buscar');
    console.log('listar productos');
    console.log('this.buscar');
    this.buscarProducto();

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
