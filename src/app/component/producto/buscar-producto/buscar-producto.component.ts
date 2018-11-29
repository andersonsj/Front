import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estacion } from 'src/app/core/model/estacion';
import { ProductoService } from 'src/app/core/services/producto/producto.service';
import { AlmacenService } from 'src/app/core/services/tienda/almacen.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BuscarProductoComponent implements OnInit {

  private producto: any;
  private buscar: string;
  private dataProducto: any;
  public datos: any[];

  @Input() productoBuscar: string;

  constructor(private formBuilder: FormBuilder, private productoService: ProductoService,
    private almacenService: AlmacenService) { }

  buscarForm: FormGroup;
  public resultado: any;
  public mensaje: any;
  public autenticar: any;
  public pasar: any;
  public estacion: Estacion = {
    ipEstacion: null,
    idAlmacen: null,
    idZona: null
  };

  ngOnInit() {
    this.buscarForm = this.formBuilder.group({
      txtBuscador: ['', Validators.required]
    });
    let ip;
    ip = localStorage.getItem('ipEquipo');
    this.estacion.ipEstacion = ip;
    
    this.identificarTiendaPorIp();
  }

  identificarTiendaPorIp() {
    //console.log('IP estacion:' + this.estacion.ipEstacion); /**probar captura de IP al cargar página */
    //this.almacenService.postIdentificarTienda(this.estacion).subscribe(data => data);
    this.almacenService.postIdentificarTienda()
    .subscribe(data => data);
  }

  buscarProducto() {
    localStorage.setItem('buscar', this.buscarForm.get('txtBuscador').value);
  }

}
