import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
 
  formlogin!:FormGroup ;

  constructor() { }

    intiForm(){
      this.formlogin = new FormGroup({
         email : new FormControl('' , [Validators.required,Validators.email] ),
         password : new FormControl('' , Validators.required)
        }) 
    }



  ngOnInit(): void {
    this.intiForm();
  }

  OnSubmit(){
    console.log(this.formlogin.value);
  }

  get fromControls(){
    return this.formlogin.controls;
  }

}
