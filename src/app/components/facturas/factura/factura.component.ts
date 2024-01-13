import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturasService } from 'src/app/services/facturas.service';
import { Factura } from '../../clases/Factura';
import { Cliente } from '../../clases/Cliente';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {

  factura: Factura = new Factura();

  constructor( private facturaService: FacturasService, private activatedRoute: ActivatedRoute ){
    this.getFacturaById();
  }

  getFacturaById(): void{
    this.activatedRoute.params.subscribe(data => {
      let id = data['id']
      if(id){
        this.facturaService.getFactura(id).subscribe( (data) => this.factura = data)
      }
    })
  }
}
