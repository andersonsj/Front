import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from 'src/app/core/routes/home.routing';

@NgModule({
  imports: [
    HomeRouting
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
