import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout/main-layout.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    data: { pageTitle: 'Homecenter' },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'cliente',
        loadChildren: './component/cliente/cliente.module#ClienteModule'
      },
      {
        path: 'empleado',
        loadChildren: './component/empledo/empleado.module#EmpleadoModule'
      },
      {
        path: 'producto',
        loadChildren: './component/produto/producto.module#ProductoModule'
      }
    ]
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
})

export class AppRoutingModule { }
export const AppRoutingModul: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });

