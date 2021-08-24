import { Injectable } from '@angular/core';
import { LoginReq, ResponseLogin } from 'src/app/models/Login.interface';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { MsalService } from '@azure/msal-angular';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  UriReq: string = '';

  constructor(private msalService: MsalService, private http:HttpClient) { 
    this.UriReq = `${environment.localUri}:${environment.portBack}${environment.endpointSMAL}`;
  }
  
  LoginUser(){
    this.msalService.loginRedirect();
  }

  LoginUser2(){
    // this.http.get(this.UriReq)
    // .subscribe((data: any)=>{
      // window.open(data.url, "_blank");
      console.log(this.UriReq);
    // });
  }

  logout(){
    this.msalService.logout();
  }

  setSeccion(){
    this.msalService
    .instance
    .handleRedirectPromise()
    .then(
      res =>{
        if(res != null && res.account != null){
          this.msalService
            .instance
              .setActiveAccount(res.account);
              console.log(res);
        }
      }
    )
  }

  isLogged(): boolean{
    return this.msalService.instance.getActiveAccount() != null;
  }

  getName(){
    return this.msalService.instance.getActiveAccount()?.name;
  }

}
