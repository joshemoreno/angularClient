import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { LoginReq, ResponseLogin } from 'src/app/models/Login.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // createFormGroup(){
  //   return new FormGroup({
  //     email:new FormControl('',Validators.required),
  //     password:new FormControl('',Validators.required)
  //   });
  // }

  // loginForm: FormGroup;

  constructor(private LogUser:LoginService, private router: ActivatedRoute) { 
    // this.loginForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.router
    .queryParams
    .subscribe((data: any)=>{
      this.LogUser.LoginUser3(data.code,data.session_state,data.client_info)
    });
    // window.location.href = '';
  }

}
