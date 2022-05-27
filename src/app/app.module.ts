import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HttpClientModule } from '@angular/common/http';


//Services
import { authService } from './Services/auth.services';
import { ListComponentComponent } from './Component/list-component/list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [authService],
  bootstrap: [AppComponent]
})
export class AppModule { }
