import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';
import { ModuleWithProviders } from '@angular/core';


const HomeRoutes: Routes = [

    { path: 'home', component: HomeComponent }

];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(HomeRoutes);
