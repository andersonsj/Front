import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BuscadorComponent],
  exports:[
    BuscadorComponent
  ]
})
export class BuscadorModule { }
