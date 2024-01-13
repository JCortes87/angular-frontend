import { Component } from '@angular/core';
import { Producto } from '../clases/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  instrumentos: Producto[] = [];

  constructor(private productoService: ProductosService){
    productoService.getProductos().subscribe( prods => this.instrumentos = prods );
  }


}
