import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topicService/topic-service.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'topicForm',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent{

  createFormGroup(){
    return new FormGroup({
      name:new FormControl('',Validators.required),
      schedulingDate:new FormControl('',Validators.required),
      responsibleName:new FormControl('',Validators.required)
    });
  }

  topicForm: FormGroup;

  constructor(private dbTopic:TopicService) { 
    this.topicForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.topicForm.reset();
  }

  onSaveForm(){
    if(this.topicForm.valid){
      this.dbTopic.saveTopic(this.topicForm.value)
      .subscribe((data: any) =>{
        if (data.code==200){
          let user = `${data.request.name}`
          Swal.fire({
            title: 'Success!',
            text: `The topic ${user} was register`,
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
