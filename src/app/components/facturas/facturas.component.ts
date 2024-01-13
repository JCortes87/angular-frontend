import { Component } from '@angular/core';
import { Factura } from '../clases/Factura';
import { FacturasService } from 'src/app/services/facturas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clases/Cliente';
import { Producto } from '../clases/Producto';
import { ItemsFacturas } from '../clases/ItemsFacturas';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {

  factura: Factura = new Factura();
  cliente: Cliente = new Cliente();
  productos: Producto[] = [];
  selected: Producto = new Producto();
  lineasFacturas: ItemsFacturas[] = [];

  constructor(private facturaService: FacturasService, private router: Router, private activatedRoute: ActivatedRoute, 
              private clienteService: ClientesService, private productoService: ProductosService) {
    this.getCliente()
    this.productoService.getProductos().subscribe(data => this.productos = data)
  }

  getCliente(): void {
    this.activatedRoute.params.subscribe(data => {
      let id = data['clienteId']
      if (id) {
        this.clienteService.getClienteById(id).subscribe(cli => {
          this.cliente = cli
        })
      }
    })
  }

  resetSelect() {
    this.selected = new Producto();
  }

  getLineas(lineas: ItemsFacturas[]) {
    this.lineasFacturas = lineas;
  }

  saveFactura() {

    this.factura.items = this.lineasFacturas
    this.factura.cliente = this.cliente
    this.facturaService.saveFactura(this.factura).subscribe(data => {
      this.router.navigate(['/cliente', this.factura.cliente.id])
    })
  }
}
