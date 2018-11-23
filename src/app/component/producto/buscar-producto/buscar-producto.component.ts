import { Component, OnInit } from '@angular/core';
import { Estacion } from 'src/app/core/model/estacion';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  constructor(


  ) { }
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
  }


}
