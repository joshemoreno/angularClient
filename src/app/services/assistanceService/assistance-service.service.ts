import { Injectable } from '@angular/core';
import { Assistance } from 'src/app/models/assistance.interface';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { reqRespTopic } from 'src/app/models/responses/topicResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {

  URIpost: string = '';
  URIget: string = '';

  constructor(private http: HttpClient) { 
    this.URIpost = `${environment.api}${environment.assistanceEndPoint}`; 
    this.URIget = `${environment.api}${environment.getTopics}`; 
  }

  saveAssistance(newAssistance: Assistance){
    return this.http.post(this.URIpost,newAssistance);
  }

  getTopics(){
    return this.http.get<reqRespTopic>(this.URIget);
  }
}
