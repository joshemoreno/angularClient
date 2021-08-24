import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user-service.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'userForm',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  createFormGroup(){
    return new FormGroup({
      id:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required)
    });
  }

  userForm: FormGroup;
  public userRoles:any = [];
  public userStatus:any = [];

  constructor(private LogUser:LoginService, private dbUser:UserService) { 
    this.userForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.dbUser.getParams('userState')
    .subscribe(data =>{
      this.userStatus=data.request.params;
    });

    this.dbUser.getParams('userRole')
    .subscribe(data =>{
      this.userRoles=data.request.params;
    });
  }

  isLoggedIn(): boolean{
    return this.LogUser.isLogged();
  }
  
  onResetForm(){
    this.userForm.reset();
  }

  onSaveForm(){
    if(this.userForm.valid){
      this.dbUser.saveUser(this.userForm.value)
      .subscribe((data: any) =>{
        if (data.code==200){
          let user = `${data.request.name} ${data.request.lastName}`
          Swal.fire({
            title: 'Success!',
            text: `The user ${user} was register`,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        }else{
          Swal.fire({
            title: 'Error!',
            text: `${data.errors}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      });
      this.onResetForm();
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'You must enter the data',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  get name(){ return this.userForm.get('name');}
  get lastName(){ return this.userForm.get('lastName');}
  get id(){ return this.userForm.get('id');}
  get role(){ return this.userForm.get('role');}
  get status(){ return this.userForm.get('status');}

}
