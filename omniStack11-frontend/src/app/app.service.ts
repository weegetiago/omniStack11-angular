import {API} from './app.api'
import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Cases } from './cases/cases.module';
//import { Logon } from './logon/logon.model';

@Injectable()

export class Services {

    constructor(private http: HttpClient ){}

    incidentsByOng():  Observable<Cases[]> {
        return this.http.get<Cases[]>(`${API}/perfil`,{
            headers: {
                Authorization: '2a057067',
            }
        })
    }


}