import { Injectable } from '@angular/core';
import { TaskStatus } from '../project-models/task-status';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {

  constructor(private httpClient:HttpClient) { }

   // get all
   getTaskStatus():Observable<TaskStatus>{
    return this.httpClient.get<TaskStatus>('http://localhost:3000/taskstatus');
  }

  // post
  createTaskStatu(taskStatus:TaskStatus):Observable<TaskStatus>{
    return this.httpClient.post<TaskStatus>('http://localhost:3000/taskstatus',taskStatus);
 }

 // get current task status
 getCurrentTaskStatus(id:number){
  return this.httpClient.get<any[]>("http://localhost:3000/taskstatus/"+id)
}

 // put
 updateTaskStatus(id:number,taskStatus:TaskStatus):Observable<any>{
  return this.httpClient.put<any>('http://localhost:3000/taskstatus/'+id,taskStatus);
}

  // delete task priority
  deleteTaskStatus(id:number){
    return this.httpClient.delete<any>('http://localhost:3000/taskstatus/'+id);
  }


}
