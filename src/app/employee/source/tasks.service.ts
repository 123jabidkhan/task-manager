import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';
import { Project } from 'src/app/project-models/project';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  // create task post
  insertTask(newtask:Task):Observable<Task>{
    return this.http.post<Task>('http://localhost:3000/tasks',newtask);
  }

  
}
