import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TasksService } from '../source/tasks.service';
import { ProjectsService } from 'src/app/project-services/projects.service';
import { TaskPriorityService } from 'src/app/project-services/task-priority.service';

import { Router } from '@angular/router';
import { Project } from 'src/app/project-models/project';
import { TaskPriority } from 'src/app/project-models/task-priority';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  newtaskForm!:FormGroup;
  projects!:Project[];
  taskPriorities!:TaskPriority[];
  employees!:any[];

  constructor(private tasksService:TasksService,
    private projectsService:ProjectsService, private router:Router,
    private taskPriorityService:TaskPriorityService) { }

  ngOnInit(): void {
    this.newtaskForm = new FormGroup({
      taskId:new FormControl(0),
      taskName:new FormControl(0,[Validators.required]),
      description:new FormControl(0,[]),
      projectId:new FormControl(0,[Validators.required]),
      assignedTo:new FormControl(0,[Validators.required]),
      taskPriorityId:new FormControl(0,[Validators.required])
    });

    // getting projects
    this.projectsService.getAllProjects().subscribe((result:any)=>{
      this.projects = result;
      console.log(this.projects);

    });

     // getting taskprioritys
     this.taskPriorityService.getTaskPrioritys().subscribe((result:any)=>{
      this.taskPriorities = result;
      console.log(this.taskPriorities);

    });

    // getting all employees
    this.employees = [
      {"username":'abc','password':'abc123'},
      {"username":'xyz','password':'xyz123'},
      {"username":'scc','password':'scc123'}
    ]

  }



}
