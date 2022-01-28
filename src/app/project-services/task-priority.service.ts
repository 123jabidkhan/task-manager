import { Injectable } from '@angular/core';
import { TaskPriority } from '../project-models/task-priority';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskPriorityService {

  constructor(private httpClient:HttpClient) { }


   // get all
   getTaskPrioritys():Observable<TaskPriority>{
    return this.httpClient.get<TaskPriority>('http://localhost:3000/taskprioritys');
  }

  // post
  createTaskPrioritys(taskPriority:TaskPriority):Observable<TaskPriority>{
    return this.httpClient.post<TaskPriority>('http://localhost:3000/taskprioritys',taskPriority);
 }

  // get current task priority
  getCurrentTaskPriority(id:number){
    return this.httpClient.get<any[]>("http://localhost:3000/taskprioritys/"+id)
  }

   // put
   updateTaskPriority(id:number,taskPriority:TaskPriority):Observable<any>{
    return this.httpClient.put<any>('http://localhost:3000/taskprioritys/'+id,taskPriority);
  }

    // delete task priority
    deleteTaskPriority(id:number){
      return this.httpClient.delete<any>('http://localhost:3000/taskprioritys/'+id);
    }
}
