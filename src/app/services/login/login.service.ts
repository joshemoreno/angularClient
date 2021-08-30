import { Injectable } from '@angular/core';
import { LoginReq, ResponseLogin } from 'src/app/models/Login.interface';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { MsalService } from '@azure/msal-angular';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  UriReq1: string = '';
  UriReq2: string = '';

  constructor(private msalService: MsalService, private http:HttpClient) { 
    this.UriReq1 = `${environment.localUri}:${environment.portBack}`;
    this.UriReq2 = `${environment.localUri}:${environment.portBack}/logOn`;
  }
  
  LoginUser(){
    // this.msalService.loginRedirect();
    console.log('msal_angular');
  }

  LoginUser2(){
    this.http.get(this.UriReq1)
    .subscribe((data: any)=>{
      console.log("OK");
      console.log(data.url);
      window.location.href = data.url;
    });
  }

  LoginUser3(code: string,session_state: string,client_info: string){
    this.http
    .get(`${this.UriReq2}?code=${code}&client_info=${client_info}&session_state=${session_state}`)
    .subscribe((res:any)=>{
      localStorage.setItem('Token', JSON.stringify(res.data.accessToken));
      // window.location.href = '';
      // console.log(res.data.accessToken);
    });
    // window.location.href = '';
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
