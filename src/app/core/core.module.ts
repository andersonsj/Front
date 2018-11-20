import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './services/cliente/cliente.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ClienteService]
})
export class CoreModule { }
