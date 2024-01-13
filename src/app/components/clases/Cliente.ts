import { Factura } from "./Factura";

export class Cliente{
    id: number = 0;
    nombre: string = '';
    apellido: string = '';
    correo: string = '';
    fechaCreado: Date = new Date();
    foto: string = '';
    facturas: Factura[] = [];
}