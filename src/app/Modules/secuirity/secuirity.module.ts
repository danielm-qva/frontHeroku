import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuirityRoutingModule } from './secuirity-routing.module';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SecuirityRoutingModule
  ]
})
export class SecuirityModule { }
