import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador.component';
import { RouterModule } from '@angular/router';
import { ListarProductoComponent } from 'src/app/component/producto/listar-producto/listar-producto.component';
import { ProductoModule } from 'src/app/component/producto/producto.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [BuscadorComponent],
  exports: [
    BuscadorComponent
  ]
})
export class BuscadorModule { }
