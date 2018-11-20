import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarEmpleadoComponent } from './buscar-empleado/buscar-empleado.component';
import { AutenticarEmpleadoComponent } from './autenticar-empleado/autenticar-empleado.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [BuscarEmpleadoComponent, AutenticarEmpleadoComponent],
  exports: [
    AutenticarEmpleadoComponent
  ]
})
export class EmpleadoModule { }
