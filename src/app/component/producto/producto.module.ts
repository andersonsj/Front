import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { ProductoComponent } from './producto.component';
import { ProductoRouting } from 'src/app/core/routes/producto.routing';

@NgModule({
  imports: [
    CommonModule,
    ProductoRouting,
    ReactiveFormsModule
  ],
  declarations: [BuscarProductoComponent, ListarProductoComponent, ProductoComponent],
  exports: [
    BuscarProductoComponent
  ]
})
export class ProductoModule { }
