import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './component/login-component/login-component.component';

const routes: Routes = [
  {path: 'login' , component : LoginComponentComponent} ,
  {path:'**' , redirectTo : '/login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuirityRoutingModule { }
