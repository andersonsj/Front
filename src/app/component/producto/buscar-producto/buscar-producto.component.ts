import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estacion } from 'src/app/core/model/estacion';
import { ProductoService } from 'src/app/core/services/producto/producto.service';
import { AlmacenService } from 'src/app/core/services/tienda/almacen.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  private producto: any;
  private buscar: string;
  private dataProducto: any;
  public datos: any[];

  constructor(private formBuilder: FormBuilder, private productoService: ProductoService,
    private almacenService: AlmacenService) { }

  buscarForm: FormGroup;

  public resultado: any;
  public mensaje: any;
  public autenticar: any;
  public pasar: any;
  public estacion: Estacion = {
    ipEstacion: null
  };

  ngOnInit() {
    this.buscarForm = this.formBuilder.group({
      txtBuscador: ['', Validators.required]
    });
    let ip;
    ip = localStorage.getItem('ipEquipo');
    this.estacion.ipEstacion = ip;
    /*
    this.identificarTiendaPorIp();
    A la espera de servicio back para consultar tienda
    */
  }

  identificarTiendaPorIp() {
    console.log('IP estacion:' + this.estacion.ipEstacion); /**probar captura de IP al cargar página */
    this.almacenService.postIdentificarTienda(this.estacion).subscribe(data => data);
  }



  buscarProducto() {
    /*let idproducto: any;
    idproducto = this.buscarForm.get('txtBuscador').value;
    console.log('valor del campo producto: ' + idproducto);
    this.productoService.getBuscarProductos(idproducto).subscribe(
      (data) => {
        this.datos = data.value;
        this.producto = data.value;
        console.log(this.producto);
        console.log(this.datos);
        console.log(this.producto[0].sku);

      }
    ); */

    localStorage.setItem('buscar', this.buscarForm.get('txtBuscador').value);

  }

}
