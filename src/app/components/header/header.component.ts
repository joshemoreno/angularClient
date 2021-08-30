import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private LogUser:LoginService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let storedToken = localStorage.getItem('Token');
    if(!storedToken){
      console.log('Token no found');
    }
    // this.LogUser.LoginUser2();
  }

  onSubmitForm(){
    this.LogUser.LoginUser();
  }

  onSubmit(){
    this.LogUser.LoginUser2();
  }

  isLoggedIn(): boolean{
    return this.LogUser.isLogged();
  }

  getUserName(){
    return this.LogUser.getName();
  }

  onLogout(){
    return this.LogUser.logout();
  }

}
