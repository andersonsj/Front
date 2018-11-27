import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from './../../../../app/core/services/producto/producto.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public buscar: string;
  private datos: any;
  buscadorGeneralForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productoService: ProductoService) { }

  ngOnInit() {
    this.buscadorGeneralForm = this.formBuilder.group({
      txtBuscadorGeneral: ['', Validators.required]
    });
    this.buscar = localStorage.getItem('buscar');
    console.log('buscador general productos');
    console.log(this.buscar);
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
