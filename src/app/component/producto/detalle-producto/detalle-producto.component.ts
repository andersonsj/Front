import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  private cantidadProducto: any;
  private skuProducto: any;
  private nombre: any;
  private precio: any;
  private precioCmr: any;
  private garantia: any;
  private nroPuestos: any;
  private relleno: any;
  private materialPatas: any;
  private modelo: any;
  private observaciones: any;
  constructor() { }

  ngOnInit() {
    this.cantidadProducto = localStorage.getItem('cantidadProducto');
    this.skuProducto = localStorage.getItem('skuProducto');
    this.nombre = localStorage.getItem('nombre');
    this.precio = localStorage.getItem('precio');
    this.precioCmr = localStorage.getItem('precioCmr');
    this.garantia = localStorage.getItem('garantia');
    this.nroPuestos = localStorage.getItem('nroPuestos');
    this.relleno = localStorage.getItem('relleno');
    this.materialPatas = localStorage.getItem('materialPatas');
    this.modelo = localStorage.getItem('modelo');
    this.observaciones = localStorage.getItem('observaciones');
    
    console.log("sku producto detalle: "+ this.skuProducto);
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
  
}
