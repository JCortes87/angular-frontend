import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto } from '../components/clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = 'http://localhost:8080/api/productos';
  headers = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get(`${this.url}`)
      .pipe(map(products => products as Producto[]))
  }

  searchProducto(term: string){
    return this.http.get(`${this.url}buscar/${term}`, {headers: this.headers})
      .pipe(map(data => data))
  }

  getProductoById( id: number ): Observable<Producto>{
    return this.http.get<Producto>(`${this.url}/${id}`)
  }

}
