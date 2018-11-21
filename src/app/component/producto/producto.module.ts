import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [BuscarProductoComponent],
  exports: [
    BuscarProductoComponent
  ]
})
export class ProductoModule { }
