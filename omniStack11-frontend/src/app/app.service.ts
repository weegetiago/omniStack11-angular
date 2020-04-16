import { Register } from './register/register.model';
import { NewCase } from './new-case/new-case.model';
import { API } from './app.api'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Cases } from './cases/cases.module';
import { Logon } from './logon/logon.model';

const ongId = localStorage.getItem('ongId');
const ongName = localStorage.getItem('ongName')

@Injectable()
export class Services {

    constructor(private http: HttpClient) { }

    incidentsByOng(): Observable<Cases[]> {
        return this.http.get<Cases[]>(`${API}/perfil`, {
            headers: {
                Authorization: ongId,
            }
        })
    }

    newIncidentsByOng(newCase: NewCase): Observable<any> {
        return this.http.post(`${API}/incidents`, newCase, {
            headers: {
                 Authorization: ongId,
            }
        })
    }

     deleteCases(id: string): Observable<any> {
        return this.http.delete(`${API}/incidents/${id}`, {
            headers: {
                 Authorization: ongId,
            }
        })
    } 

    newRegister(register: Register): Observable<any>{
        return this.http.post(`${API}/ongs`, register,{})
    }

    logon(logon: Logon): Observable<any>{
        return this.http.post(`${API}/sessao`,logon)
    }
}