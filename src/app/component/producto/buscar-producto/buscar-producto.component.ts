import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estacion } from 'src/app/core/model/estacion';
import { ProductoService } from 'src/app/core/services/producto/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private productoService: ProductoService) { }

  buscarForm: FormGroup;
  public resultado: any;
  public mensaje: any;
  public autenticar: any;
  public pasar: any;
  estacion: Estacion = {
    idEstacion: null,
    ipEstacion: null,
    numerotienda: null
  };

  ngOnInit() {
    this.buscarForm = this.formBuilder.group({
      txtBuscador: ['', Validators.required]
    });
  }

  buscarProducto() {
    this.productoService.getBuscarProductos(this.buscarForm.value).subscribe(data => data);
  }

}
