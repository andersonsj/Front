import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from 'src/app/component/producto/producto.component';
import { BuscarProductoComponent } from 'src/app/component/producto/buscar-producto/buscar-producto.component';
import { ListarProductoComponent } from 'src/app/component/producto/listar-producto/listar-producto.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const ProductoRoutes: Routes = [

    { path: 'base', component: ProductoComponent },
    { path: 'buscarProducto', component: BuscarProductoComponent },
    { path: 'listarProductos', component: ListarProductoComponent }

];

export const ProductoRouting: ModuleWithProviders = RouterModule.forChild(ProductoRoutes);
