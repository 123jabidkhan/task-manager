import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { TaskStatus } from 'src/app/project-models/task-status';
import { TaskStatusService } from 'src/app/project-services/task-status.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements OnInit {

  taskStatus:TaskStatus[]=[];
  taskStatusForm!:FormGroup;
  updateTaskStatuForm!:any;

  currentTaskStatus!:any;
  taskStatusId!:any;

  isCreateFormVisible:boolean=false;
  isUpdateFormVisible:boolean=false;

  constructor(private taskStatusService:TaskStatusService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAllTaskStatus()

    this.taskStatusForm = this.fb.group({
      taskStatusId:this.fb.control(null),
      taskStatusName:this.fb.control(null,[Validators.required]),
    })
  }


  // getAllTaskStatus
  getAllTaskStatus(){
    this.taskStatusService.getTaskStatus().subscribe((result:any)=>{
      console.log("task status >>",result);
      this.taskStatus = result;
    });
  }
  
  // taskPriorityFormShow
  taskStatusFormShow(){
    this.isCreateFormVisible = true;
    this.isUpdateFormVisible=false;
    console.log(this.isCreateFormVisible);
  }

  // save newForm
onSaveClick(){
  if(this.taskStatusForm.valid){
    this.taskStatusService.createTaskStatu(this.taskStatusForm.value).subscribe((response)=>{

      console.log(response);
      this.getAllTaskStatus();

      // resetform
      this.taskStatusForm.reset();

    },(error)=>{
      console.log("error");
    })
  }
}

// get task status by id
getTaskStatus(id:number){
  this.taskStatusService.getCurrentTaskStatus(id).subscribe((response:any)=>{
    console.log(response);
    this.currentTaskStatus=response;
    console.log(this.currentTaskStatus.taskStatusName);

    this.taskStatusId = this.currentTaskStatus.id;
    console.log(this.taskStatusId);


    this.isUpdateFormVisible=true;
    this.isCreateFormVisible = false;
   
  })
}


// update taskstatus form submitted
updateFormSubmitted(taskStatu:any){
 
  var uTaskStatus:TaskStatus=new TaskStatus();
  uTaskStatus.taskStatusId = this.currentTaskStatus.id;
  uTaskStatus.taskStatusName = taskStatu.value.taskStatusName;
  uTaskStatus.id=this.taskStatusId;
   console.log(uTaskStatus);

   this.taskStatusService.updateTaskStatus(this.taskStatusId,uTaskStatus).subscribe((res:any)=>{
      console.log(uTaskStatus);
      console.log('form updated..!!');
      this.getAllTaskStatus();
      
      this.isUpdateFormVisible=false;

    },(error)=>{
      console.log(error);
    })

  }

    // delete task priority 
deleteTaskStatus(id:number){
  this.getAllTaskStatus();

  this.taskStatusService.deleteTaskStatus(id).subscribe((res:any)=>{
    console.log('task status deleted successfully.!!');
    this.getAllTaskStatus();

  });
}

}
