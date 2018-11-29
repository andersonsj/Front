import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  @Output() enviar = new EventEmitter<string>();
  mensaje = 'estoy en el hijo';

  public buscar: string;

  buscadorGeneralForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.buscadorGeneralForm = this.formBuilder.group({
      txtBuscadorGeneral: ['', Validators.required]
    });

  }


  recargar() {
    localStorage.setItem('buscar', this.buscadorGeneralForm.get('txtBuscadorGeneral').value);
    this.enviar.emit(this.mensaje);
  }



}
