
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
  private nombre: any;
  private precio: any;
  private precioCmr: any;
  private garantia: any;
  private nroPuestos: any;
  private relleno: any;
  private materialPatas: any;
  private modelo: any;
  private observaciones: any;
  private ficha: any;

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

  identificarProducto(identificador: any) {
    console.log('identificador: ' + identificador);
    this.sku = this.datos[identificador].sku;
    this.nombre = this.datos[identificador].nombre;
    this.precio = this.datos[identificador].precio;
    this.precioCmr = this.datos[identificador].cmr;
    this.garantia = this.datos[identificador].garantia;
    this.nroPuestos = this.datos[identificador].ficha.nroPuestos;
    this.relleno = this.datos[identificador].ficha.relleno;
    this.materialPatas = this.datos[identificador].ficha.materialPatas;
    this.modelo = this.datos[identificador].ficha.modelo;
    this.observaciones = this.datos[identificador].ficha;
    this.ficha = this.datos[identificador].ficha;
    console.log('sku: ' + this.sku);

  }

  guardarDetalle() {
    console.log('Cantidad de producto');
    console.log(this.productoForm.get('txtCantidad').value);
    localStorage.setItem('cantidadProducto', this.productoForm.get('txtCantidad').value);
    localStorage.setItem('skuProducto', this.sku);
    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('precio', this.precio);
    localStorage.setItem('precioCmr', this.precioCmr);
    localStorage.setItem('garantia', this.garantia);
    localStorage.setItem('nroPuestos', this.nroPuestos);
    localStorage.setItem('relleno', this.relleno);
    localStorage.setItem('materialPatas', this.materialPatas);
    localStorage.setItem('modelo', this.modelo);
    localStorage.setItem('observaciones', this.observaciones);
    localStorage.setItem('ficha', JSON.stringify(this.ficha));
  }

  cantidadIni() {
    console.log('Cantidad reiniciada a 1');
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
