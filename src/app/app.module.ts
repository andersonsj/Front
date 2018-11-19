import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { UrlproviderService } from './util/endpoint/urlprovider.service';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { LayoutModule } from './shared/layout/layout.module';
import { ClienteModule } from './component/cliente/cliente.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ProductoModule } from './producto/producto.module';

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
