import { NgModule } from '@angular/core';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { ClienteRouting } from 'src/app/core/routes/cliente.routing';
import { ClienteComponent } from './cliente.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClienteRouting

  ],
  declarations: [
    BuscarClienteComponent,
    ClienteComponent
  ],
  exports: [BuscarClienteComponent]
})
export class ClienteModule { }
