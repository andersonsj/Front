
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProductoService } from 'src/app/core/services/producto/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListarProductoComponent implements OnInit {

  productoForm: FormGroup;
  @Input() productoBuscar: string;

  public buscar: string;
  private datos: any;
  private cantidadProducto: any = 1;
  private sku: any;

  constructor(private productoService: ProductoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productoForm = this.formBuilder.group({
      txtCantidad: ['', Validators.required]
    });
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

  guardarDetalle(){
    console.log("Cantidad de producto");
    console.log(this.productoForm.get('txtCantidad').value);
    localStorage.setItem('cantidadProducto', this.productoForm.get('txtCantidad').value);
    this.sku = this.datos.sku;
    console.log("sku: " + this.sku);
  }

  cantidadIni(){ 
    console.log("Cantidad reiniciada a 1");
    this.cantidadProducto = 1;
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
