import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { reqRespUser } from 'src/app/models/responses/userResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  URIpost: string = '';
  URIget: string = '';

  constructor(private http: HttpClient) { 
    this.URIpost = `${environment.api}${environment.userEndPoint}`; 
    this.URIget = `${environment.api}${environment.getParams}`; 
  }

  saveUser(newUser: User){
    return this.http.post(this.URIpost,newUser);
  }

  getParams(typeParam:string){
    return this.http.get<reqRespUser>(`${this.URIget}?typeParam=${typeParam}`);
  }

}
