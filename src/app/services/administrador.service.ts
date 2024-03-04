import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ServiceNameService {
    constructor(private httpClient: HttpClient) { }
    
}

export class AdministradorService{
    private URL = 'http://localhost:3000/api'

    constructor(private http: HttpClient) {}

    getAdministrador () : Observable<any>{
        return this.http.get(this.URL);
    }

    crearAministrador(administradorData: any): Observable<any>{
        return this.http.post(this.URL, administradorData);
    }
    
    actulializarAdministrador(id: string, administradorData: any): Observable<any>{
        return this.http.put(`${this.URL}/${id}`, administradorData);       
    }

    eliminarAdministrador(id: string): Observable<any>{
        return this.http.delete(`${this.URL}/${id}`);
    }
}