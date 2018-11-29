import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, CollapseMenuComponent],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
