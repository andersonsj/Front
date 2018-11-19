import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: { pageTitle: 'Home' },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'cliente',
        loadChildren: 'app/component/cliente/cliente.module#ClienteModule'
      },
      {
        path: 'empleado',
        loadChildren: 'app/component/empledo/empleado.module#EmpleadoModule'
      },
      {
        path: 'producto',
        loadChildren: 'app/component/produto/producto.module#ProductoModule'
      }
    ]
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }

