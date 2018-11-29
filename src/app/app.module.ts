import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UrlproviderService } from './util/endpoint/urlprovider.service';

import { LayoutModule } from './shared/layout/layout.module';
import { ProductoModule } from './component/producto/producto.module';
import { EmpleadoModule } from './component/empleado/empleado.module';
import { ClienteModule } from './component/cliente/cliente.module';

import { Routing, routes } from './app-routing';

import { CoreModule } from './core/core.module';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Configuration } from './Util/configuration';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './component/home/home.module';
import { NavigationComponent } from './shared/layout/navigation/navigation.component';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout/main-layout.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    EmpleadoModule,
    ProductoModule,
    ClienteModule,
    HomeModule
  ],
  providers: [UrlproviderService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
