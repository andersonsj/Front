import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { UrlproviderService } from './util/endpoint/urlprovider.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UrlproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
