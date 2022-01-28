import { Component, OnInit } from '@angular/core';
import { TaskPriority } from 'src/app/project-models/task-priority';
import { TaskPriorityService } from 'src/app/project-services/task-priority.service';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-task-priorities',
  templateUrl: './task-priorities.component.html',
  styleUrls: ['./task-priorities.component.scss']
})
export class TaskPrioritiesComponent implements OnInit {

  taskPriorities:TaskPriority[]=[];
  taskPriorityForm!:FormGroup;
  updateTaskPriorityForm!:any;

  currentTaskPriority!:any;
  taskPriorityId!:any;



  isCreateFormVisible:boolean=false;
  isUpdateFormVisible:boolean=false;
  constructor(private taskPriorityService:TaskPriorityService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAllTaskPriorities();

     // create form
     this.taskPriorityForm = this.fb.group({
      taskPriorityId:this.fb.control(null),
      taskPriorityName:this.fb.control(null,[Validators.required]),
    })
  }


  getAllTaskPriorities(){
    this.taskPriorityService.getTaskPrioritys().subscribe((result:any)=>{
      console.log("task-priority >>",result);
      this.taskPriorities = result;
    });
  }

  // taskpriority form show
  taskPriorityFormShow(){
  this.isCreateFormVisible = true;
  this.isUpdateFormVisible=false;
  console.log(this.isCreateFormVisible)
}


// save newForm
onSaveClick(){
  if(this.taskPriorityForm.valid){
    this.taskPriorityService.createTaskPrioritys(this.taskPriorityForm.value).subscribe((response)=>{

      console.log(response);
      this.getAllTaskPriorities();

      // resetform
      this.taskPriorityForm.reset();

    },(error)=>{
      console.log("error");
    })
  }
}


// get country by id
getTask(id:number){
  this.taskPriorityService.getCurrentTaskPriority(id).subscribe((response:any)=>{
    console.log(response);
    this.currentTaskPriority=response;
    console.log(this.currentTaskPriority.taskPriorityName)

    this.taskPriorityId = this.currentTaskPriority.id;
    console.log(this.taskPriorityId);


    this.isUpdateFormVisible=true;
    this.isCreateFormVisible = false;
   
  })
}


// update task form submitted
updateFormSubmitted(taskPriority:any){
 
  var uTaskPriority:TaskPriority=new TaskPriority();
  uTaskPriority.taskPriorityId = this.currentTaskPriority.id;
  uTaskPriority.taskPriorityName = taskPriority.value.taskPriorityName;
  uTaskPriority.id=this.taskPriorityId
   console.log(uTaskPriority);
   this.taskPriorityService.updateTaskPriority(this.taskPriorityId,uTaskPriority).subscribe((res:any)=>{
      console.log(uTaskPriority);
      console.log('form updated..!!');
      this.getAllTaskPriorities();
      
      this.isUpdateFormVisible=false;

    },(error)=>{
      console.log(error);
    })

  }


  // delete task priority 
deleteTaskP(id:number){
  this.getAllTaskPriorities();

  this.taskPriorityService.deleteTaskPriority(id).subscribe((res:any)=>{
    console.log('task priority deleted successfully.!!');
    this.getAllTaskPriorities();

  });
}


}