import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/home/about/about.component';
import { DashboardComponent } from './admin/home/dashboard/dashboard.component';
import { MastersComponent } from './admin/home/masters/masters.component';
import { ProjectsComponent } from './admin/home/projects/projects.component';
import { UpdateProjectComponent } from './admin/home/update-project/update-project.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


// employee comos
import { TasksComponent } from './employee/tasks/tasks.component';
import { CreateTaskComponent } from './employee/create-task/create-task.component';
import { UpdateTaskComponent } from './employee/update-task/update-task.component';
import { EditTaskComponent } from './employee/edit-task/edit-task.component';
import { DemoComponent } from './employee/demo/demo.component';
const routes: Routes = [

  {path:'',redirectTo:'login', pathMatch:'full'},
  { path: 'tasks', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  
  // {path:'demo',component:DemoComponent},

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'about',component:AboutComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'masters',component:MastersComponent},
  {path:'update/:id',component:UpdateProjectComponent},
  // employee compos
  {path:"tasks",component:TasksComponent},
  {path:"create-task",component:CreateTaskComponent},
  {path:"update-task",component:UpdateTaskComponent},
  {path:"edit-task",component:EditTaskComponent},



  {path:'**',redirectTo:'login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
