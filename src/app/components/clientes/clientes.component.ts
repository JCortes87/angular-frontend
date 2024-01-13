import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from '../clases/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[] = [];

  constructor( private clienteService: ClientesService ){}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe( cli => this.clientes = cli)
  }

}
