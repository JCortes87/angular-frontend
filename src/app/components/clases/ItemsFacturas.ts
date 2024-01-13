import { Producto } from "./Producto";

export class ItemsFacturas{
    id: number = 0;
    cantidad: number = 0;
    producto: Producto = new Producto();
    importe: number = 0.0;
}