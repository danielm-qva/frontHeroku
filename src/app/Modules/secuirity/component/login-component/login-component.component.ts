import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, take } from 'rxjs';

//services
import { authService } from '../../../../Services/auth.services'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit,OnDestroy {
 
  formlogin!:FormGroup ;
  destroySubcription$ : Subject<boolean> = new Subject();

  constructor(private _loginService: authService , private router: Router) { }

    intiForm(){
      this.formlogin = new FormGroup({
         email : new FormControl('' , [Validators.required,Validators.email] ),
         password : new FormControl('' , Validators.required)
        }) 

    }
  ngOnInit(): void {
    this.intiForm();
  }

   ngOnDestroy(): void {
     console.log("Destroy subscription");
     this.destroySubcription$.next(true);
     this.destroySubcription$.complete();
   }

  async OnSubmit(){ 
    console.log("Submit subscription");
      await this._loginService.login(this.formlogin.value).pipe(take(1)).subscribe((res: any) => {
         this._loginService.Autenticar(res.token)
      }, err => {console.log(err.error)})
  }
}
 