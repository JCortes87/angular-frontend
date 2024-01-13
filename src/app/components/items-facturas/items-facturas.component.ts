import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../clases/Producto';
import { ItemsFacturas } from '../clases/ItemsFacturas';

@Component({
  selector: 'app-items-facturas',
  templateUrl: './items-facturas.component.html',
  styleUrls: ['./items-facturas.component.css']
})
export class ItemsFacturasComponent {

  @Output() lineas = new EventEmitter<ItemsFacturas[]>; 
  @Input() instrumento: Producto = new Producto();
  items: ItemsFacturas[] = [];
  index: number = 0;
  granTotal: number = 0;

  getSelectedProduct() {

    this.index = this.items.findIndex(item => item.producto === this.instrumento);
    if(this.index !== -1){
      this.items[this.index].cantidad++;
      this.items[this.index].importe = this.items[this.index].producto.precio * this.items[this.index].cantidad;
    }else{
      this.items.push({
        id: this.items.length + 1,
        cantidad: 1,
        producto: this.instrumento,
        importe: this.instrumento.precio * 1
      })
    }

    this.granTotal = this.items.reduce((total, producto) => total + producto.importe, 0);

  }

  calcularValor(i: number) {

    if(this.items[i].cantidad > 0){
      this.items[i].importe = this.items[i].producto.precio * this.items[i].cantidad;
      this.granTotal = this.items.reduce((total, producto) => total + producto.importe, 0);
    }else {
      this.items.splice(i, 1);
    }
  }

  deleteItem(i: number){
    this.items.splice(i, 1);
    this.granTotal = this.items.reduce((total, producto) => total + producto.importe, 0);
  }

  setItems() {
    this.lineas.emit(this.items)
  }

}
