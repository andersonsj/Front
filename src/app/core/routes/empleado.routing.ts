import { Route, Routes, RouterModule } from '@angular/router';
import { AutenticarEmpleadoComponent } from 'src/app/component/empleado/autenticar-empleado/autenticar-empleado.component';
import { ModuleWithProviders } from '@angular/core';


const EmpleadoRoutes: Routes = [

    { path: 'base', },
    { path: 'autenticar', component: AutenticarEmpleadoComponent }

];

export const EmpleadoRouting: ModuleWithProviders = RouterModule.forChild(EmpleadoRoutes);
