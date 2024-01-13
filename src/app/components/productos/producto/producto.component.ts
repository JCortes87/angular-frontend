import { Component } from '@angular/core';
import { Producto } from '../../clases/Producto';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  producto: Producto = new Producto();

  constructor( private productoService: ProductosService, private activatedRoute: ActivatedRoute ){
    this.getProducto()
  }

  getProducto(): void{
    this.activatedRoute.params.subscribe( prod => {
      let id = prod['id']
      if(id){
        this.productoService.getProductoById(id).subscribe( data => this.producto = data)
      }
    })
  }

}
