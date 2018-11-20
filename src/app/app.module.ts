import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UrlproviderService } from './util/endpoint/urlprovider.service';
import { LayoutModule } from './shared/layout/layout.module';
import { ProductoModule } from './component/producto/producto.module';
import { EmpleadoModule } from './component/empleado/empleado.module';
import { Routing } from './app-routing';

import { CoreModule } from './core/core.module';
import { ClienteModule } from './component/cliente/cliente.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './core/services/cliente/cliente.service';
import { Configuration } from './Util/configuration';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    Routing,
    LayoutModule,
    EmpleadoModule,
    ProductoModule,
    CoreModule,
    ClienteModule

  ],
  providers: [UrlproviderService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
