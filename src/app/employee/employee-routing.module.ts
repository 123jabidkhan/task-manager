import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  {
    path:'',children:[
      {path:"",component:TasksComponent},
      {path:"create-task",component:CreateTaskComponent},
      {path:"update-task",component:UpdateTaskComponent},
      {path:"edit-task",component:EditTaskComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
  
 }
