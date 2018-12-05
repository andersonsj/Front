import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UrlproviderService } from './util/endpoint/urlprovider.service';
import { LayoutModule } from './shared/layout/layout.module';
import { ProductoModule } from './component/producto/producto.module';
import { EmpleadoModule } from './component/empleado/empleado.module';
import { Routing } from './app-routing';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Configuration } from './Util/configuration';
import { HomeModule } from './component/home/home.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    Routing,
    LayoutModule,
    ReactiveFormsModule,
    EmpleadoModule,
    ProductoModule,
    HomeModule
  ],
  providers: [UrlproviderService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
