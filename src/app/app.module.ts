import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { UrlproviderService } from './util/endpoint/urlprovider.service';
import { LayoutModule } from './shared/layout/layout.module';
import { ClienteModule } from './component/cliente/cliente.module';
import { ProductoModule } from './component/producto/producto.module';
import { EmpleadoModule } from './component/empleado/empleado.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ClienteModule,
    EmpleadoModule,
    ProductoModule
  ],
  providers: [UrlproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
