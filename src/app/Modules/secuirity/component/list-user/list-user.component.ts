import { Component, OnInit } from '@angular/core';
import {authService} from '../../../../Services/auth.services'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private servicesAut: authService) { }

  ngOnInit(): void {
  }

  logout(){
    this.servicesAut.logout();
  }

}
