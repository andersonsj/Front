import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { ClienteRouting } from 'src/app/core/routes/cliente.routing';

@NgModule({
  imports: [
    CommonModule,
    ClienteRouting
  ],
  declarations: [BuscarClienteComponent]
})
export class ClienteModule { }
