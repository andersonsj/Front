import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-autenticar-empleado',
  templateUrl: './autenticar-empleado.component.html',
  styleUrls: ['./autenticar-empleado.component.css']
})
export class AutenticarEmpleadoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) { }

  addForm: FormGroup;
 
  ngOnInit() {
    this.addForm = this.formBuilder.group({

      usuariologin: ['', Validators.required],
      contaseñalogin: ['', Validators.required],
      idalmacen: ['', Validators.required]
    });

  }

  login() {
    this.clienteService.postAutenticar(this.addForm.value).subscribe(data => data);
  }

}
