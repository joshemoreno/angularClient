import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/userService/user-service.service';
import { TopicComponent } from './components/topic/topic.component';
import { TopicService } from './services/topicService/topic-service.service';
import { AssistanceComponent } from './components/assistance/assistance.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { environment } from '../environments/environment';
import { MaslGuard } from './services/masl/masl.guard';

export function MSALInterface(): IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId: `${environment.idAppAzure}`
      // ,
      // redirectUri: `${environment.localUri}:${environment.port}`
    }
  })
}

const routers: Routes = [
  {path: '', component: UserComponent, pathMatch: 'full' },
  {path: 'topics', component: TopicComponent, canActivate: [MaslGuard]},
  {path: 'assistance', component: AssistanceComponent, canActivate: [MaslGuard]},
  {path: 'logOn', component: LoginComponent},
  {path: 'login', component: LoginComponent, canActivate: [MaslGuard]},
  {path: '**', redirectTo:'/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TopicComponent,
    AssistanceComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MsalModule,
    RouterModule.forRoot(routers)
  ],
  providers: [
    UserService,
    TopicService,
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInterface
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
