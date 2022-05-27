import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class authService {

    constructor(private _http: HttpClient , private _router: Router) { }

    login(data : object) {
        return this._http.post<string>(environment.baseUrl + '/login' , data);
    }

   isAutenticar():boolean {
       return true ? localStorage.getItem("token")!== null : false ;
   }

   Autenticar(token: string ) {
     localStorage['token'] = token;
     this._router.navigateByUrl('/listuser')
   }

   logout() {
       localStorage.clear();
       this._router.navigateByUrl('/login')
   }

}