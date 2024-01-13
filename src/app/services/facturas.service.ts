import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Factura } from '../components/clases/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  urlBase: string = 'http://localhost:8080/api/';
  factura: string = 'factura';
  ver: string = 'ver';
  headers = new HttpHeaders({ 'content-type': 'application/json' });

  constructor( private http: HttpClient ) { }

  getFactura( id: number ): Observable<Factura>{
    return this.http.get<Factura>(`${this.urlBase}${this.ver}/${id}`);
  }

  saveFactura( factura: Factura ): Observable<Factura> {
    return this.http.post<Factura>(`${this.urlBase}${this.factura}/${factura.cliente.id}`, factura, {headers: this.headers})
  }
}
