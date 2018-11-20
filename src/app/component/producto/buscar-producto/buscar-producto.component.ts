import { Component, OnInit } from '@angular/core';
import { consultaTiendaService } from 'src/app/service/consulta-tienda.service';
import { Estacion } from 'src/app/Model/estacion';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  constructor() { }
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

  /*
  buscarCliente() {
    this.serv_consultarTienda.getConsultarTienda(this.autenticar).subscribe(
      respuesta => {
        this.resultado = respuesta
        console.log(respuesta)
        this.mensaje = this.resultado.codigo;
        console.log("Mi mensaje es : " + this.mensaje);
        if (this.mensaje === 0) {
          this.pasar = true;
        }
      }
    );
  }*/

  /* internalIp:any = require('internal-ip');
  getIp() {
    
    this.internalIp.v4().then(ip => {
      console.log("opción 1: "+ip);
    });
    console.log("opción 2: "+this.internalIp.v4.sync())
  }*/

  //import ipaddr = require('ipaddr.js');

}
