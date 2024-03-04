import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export class HistorialHorarioServices{

  private URL = 'http://localhost:3000/api'

  constructor (private http: HttpClient) {}

  getHistorialHorario(): Observable<any> {
    return this.http.get(this.URL);
  }

  getHistorialHorarioById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}`);
  }

  crearHistorialHorario(historialHorarioData: any): Observable<any> {
    return this.http.post(this.URL, historialHorarioData);
  }

  actualizarHistorialHorario(id: string, historialHorarioDataData: any): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, historialHorarioDataData);
  }

  eliminarHistorialHorario(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }
  
}
