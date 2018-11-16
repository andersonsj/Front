import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { HeaderModule } from './layout/header/header.module';
import { MainLayoutComponent } from './layout/app-layouts/main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [MainLayoutComponent],
  exports: [
    HeaderModule
  ]
})
export class SharedModule { }
