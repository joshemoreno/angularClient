import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { LoginReq, ResponseLogin } from 'src/app/models/Login.interface';


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

  constructor() { 
    // this.loginForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  // // onResetForm(){
  // //   this.loginForm.reset();
  // // }

  // onSubmitForm(){
  //     this.LogUser.LoginUser();
  // }

}
