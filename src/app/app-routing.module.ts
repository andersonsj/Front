import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

export const routes: Routes = [

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

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
})

export class AppRoutingModule { }

