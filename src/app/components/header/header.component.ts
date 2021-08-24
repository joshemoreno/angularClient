import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private LogUser:LoginService, private msalService: MsalService) { }

  ngOnInit(): void {
    this.LogUser.setSeccion();
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
