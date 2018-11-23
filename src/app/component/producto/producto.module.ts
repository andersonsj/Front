import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarProductoComponent } from './listar-producto/listar-producto/listar-producto.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [BuscarProductoComponent, ListarProductoComponent],
  exports: [
    BuscarProductoComponent
  ]
})
export class ProductoModule { }
