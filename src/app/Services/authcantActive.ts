import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { authService } from './auth.services';

@Injectable({providedIn: 'root'})
export class authcantActive implements CanActivate {
    constructor(private _service: authService , private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
             if(this._service.isAutenticar()){
                 return true;
             }
             else {
                  this._router.navigate(['/login'])
                 return false;
             }
    }
}