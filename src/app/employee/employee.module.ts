import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { AgmCoreModule } from '@agm/core';
// mat modules
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    TasksComponent,
    CreateTaskComponent,
    EditTaskComponent,
    UpdateTaskComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB7E_OjGX67nye3Gw3Ko_PcYMjNAhRBv-Q'
    }),

    // mat modules
    MatCardModule,
    MatButtonModule,
    MatIconModule

  ],
  exports:[
    CreateTaskComponent,EditTaskComponent,UpdateTaskComponent,TasksComponent,DemoComponent
  ]
  
})
export class EmployeeModule { }
