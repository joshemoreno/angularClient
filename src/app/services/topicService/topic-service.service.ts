import { Injectable } from '@angular/core';
import { Topic } from 'src/app/models/topic.interface';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  URI: string = '';

  constructor(private http: HttpClient) { 
    this.URI = `${environment.api}${environment.topicEndPoint}`; 
  }

  saveTopic(newTopic: Topic){
    return this.http.post(this.URI,newTopic);
  }

}
