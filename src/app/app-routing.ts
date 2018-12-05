import { Routes, RouterModule } from '@angular/router';
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
                loadChildren: './component/empleado/empleado.module#EmpleadoModule'
            },
            {
                path: 'producto',
                loadChildren: './component/producto/producto.module#ProductoModule'
            }
        ]
    },

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
