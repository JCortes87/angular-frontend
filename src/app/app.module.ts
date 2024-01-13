import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ItemsFacturasComponent } from './components/items-facturas/items-facturas.component';
import { FacturaComponent } from './components/facturas/factura/factura.component';
import { ProductoComponent } from './components/productos/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    ClienteComponent,
    FacturasComponent,
    ItemsFacturasComponent,
    FacturaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
