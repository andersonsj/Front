import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyLayoutComponent } from './app-layouts/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './app-layouts/main-layout/main-layout.component';
import { HeaderModule } from './header/header.module';
import { NavigationModule } from './navigation';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NavigationModule,
    RouterModule
  ],
  declarations: [
    EmptyLayoutComponent,
    MainLayoutComponent
  ],
  exports: [
    HeaderModule,
    NavigationModule
  ]
})
export class LayoutModule { }
