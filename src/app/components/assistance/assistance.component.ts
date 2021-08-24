import { Component, OnInit } from '@angular/core';
import { AssistanceService } from '../../services/assistanceService/assistance-service.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'assistanceForm',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.css']
})
export class AssistanceComponent{

  createFormGroup(){
    return new FormGroup({
      id:new FormControl('',Validators.required),
      topic:new FormControl('',Validators.required)
    });
  }

  assistanceForm: FormGroup;
  public topics:any = [];

  constructor(private dbAssistance:AssistanceService) { 
    this.assistanceForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.dbAssistance.getTopics()
    .subscribe(data =>{
      this.topics=data.request.Items;
    });
  }

  onResetForm(){
    this.assistanceForm.reset();
  }

  onSaveForm(){
    if(this.assistanceForm.valid){
      this.dbAssistance.saveAssistance(this.assistanceForm.value)
      .subscribe((data: any) =>{
        if (data.code==200){
          Swal.fire({
            title: 'Success!',
            text: `${data.errors}`,
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

}
