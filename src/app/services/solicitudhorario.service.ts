import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export class SolicitudHorarioService{

  private URL = 'http://localhost:3000/api'

  constructor (private http: HttpClient) {}

  getSolicitudHorarios(): Observable<any> {
    return this.http.get(this.URL);
  }

  getSolicitudHorariosById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}`);
  }

  crearSolicitudHorarios(solicitudHorariosData: any): Observable<any> {
    return this.http.post(this.URL, solicitudHorariosData);
  }

  actualizarSolicitudHorarios(id: string, solicitudHorariosData: any): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, solicitudHorariosData);
  }
  
  eliminarSolicitudHorarios(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

}
