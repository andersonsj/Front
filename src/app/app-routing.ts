import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout/main-layout.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ClienteModule } from './component/cliente/cliente.module';

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

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
