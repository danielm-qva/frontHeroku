import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './component/list-user/list-user.component';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import {authcantActive } from '../../Services/authcantActive';

const routes: Routes = [
  {path: 'login' , component : LoginComponentComponent} ,
  {path: 'listuser', canActivate: [authcantActive] ,component : ListUserComponent},
  {path:'**' , redirectTo : '/login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuirityRoutingModule { }
