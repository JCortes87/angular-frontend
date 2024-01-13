import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../components/clases/Cliente';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  urlCliente: string = 'http://localhost:8080/api/clientes';
  headers = new HttpHeaders({ 'content-type': 'application/json' });

  constructor( private http: HttpClient ) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get(this.urlCliente).pipe(
      map( cli => cli as Cliente[])
    )
  }

  getClienteById( id:number ): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlCliente}/${id}`)
  }

}
