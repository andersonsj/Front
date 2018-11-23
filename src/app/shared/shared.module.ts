import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './layout/header/header.module';

import { ClienteModule } from '../component/cliente/cliente.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ClienteModule,
    RouterModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ]
})
export class SharedModule { }
