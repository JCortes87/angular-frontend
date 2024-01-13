import { Cliente } from "./Cliente";
import { ItemsFacturas } from "./ItemsFacturas";

export class Factura{
    id: number = 0;
    descripcion: string = '';
    observacion: string = '';
    fechaCreado: Date = new Date();
    cliente: Cliente = new Cliente();
    items: ItemsFacturas[] = [];
    selected: number[] = [];
    total: number = 0.0;
}