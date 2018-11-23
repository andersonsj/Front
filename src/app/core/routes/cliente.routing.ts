import { Routes, RouterModule } from '@angular/router';
import { BuscarClienteComponent } from 'src/app/component/cliente/buscar-cliente/buscar-cliente.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ClienteComponent } from 'src/app/component/cliente/cliente.component';

const ClienteRoutes: Routes = [

    { path: 'base', component: ClienteComponent },
    { path: 'buscarCliente', component: BuscarClienteComponent }

];

export const ClienteRouting: ModuleWithProviders = RouterModule.forChild(ClienteRoutes);
