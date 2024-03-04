import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export class DepartamentoService{

  private URL = 'http://localhost:3000/api'

  constructor (private http: HttpClient) {}

  getDepartamento(): Observable<any> {
    return this.http.get(this.URL);
  }

  getDepartamentoById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}`);
  }

  crearDepartamento(departamentoData: any): Observable<any> {
    return this.http.post(this.URL, departamentoData);
  }

  actualizarDepartamento(id: string, departamentoData: any): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, departamentoData);
  }

  eliminarDepartemento(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

}