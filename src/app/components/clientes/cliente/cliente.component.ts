import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from '../../clases/Cliente';
import { ActivatedRoute } from '@angular/router';
import { Factura } from '../../clases/Factura';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  cliente:Cliente = new Cliente();
  facturas: Factura[] = [];
  
  constructor( private clienteService: ClientesService, private activatedRoute: ActivatedRoute, private facturaService: FacturasService ){ 
    this.loadCliente();
  }

  loadCliente(): void{
    this.activatedRoute.params.subscribe( data => {
      let id = data['id']
      if(id){
        this.clienteService.getClienteById(id).subscribe( (cli) => {
          this.cliente = cli
          this.facturas = cli.facturas
        })
      }
    })
  }

}
