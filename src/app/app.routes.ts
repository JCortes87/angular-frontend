import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { FacturaComponent } from './components/facturas/factura/factura.component';
import { ProductoComponent } from './components/productos/producto/producto.component';

const ROUTES: Routes = [
    { path: 'clientes', component: ClientesComponent },
    { path: 'cliente/:id', component: ClienteComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'factura/:id', component: FacturaComponent },
    { path: 'facturas/:clienteId', component: FacturasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'productos' }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }