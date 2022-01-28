import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Project } from '../project-models/project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _http:HttpClient) { }
// get method
  getAllProjects():Observable<Project[]>{
    // jwt auth
    var currentUser = {token:""};
    var headers = new HttpHeaders();
    headers=headers.set("Authorization","Bearer");
    if(sessionStorage.curentUser != null){
      currentUser = JSON.parse(sessionStorage.currentUser);
      headers = headers.set("Authorization","Bearer" + currentUser.token);
    }
    // end jwt auth

    return this._http.get<Project[]>('http://localhost:3000/projects',{responseType:"json"});
  }

  // get current project
  getCurrentProject(id:number){
    return this._http.get<Project[]>("http://localhost:3000/projects/"+id)
  }

  // post method
  insertProject(formData:Project):Observable<Project>{
    return this._http.post<Project>('http://localhost:3000/projects',formData);
  }

  // put method
  updateProject(id:number,formData:Project):Observable<any>{  
    return this._http.put<any>('http://localhost:3000/projects/'+id,formData);
  }

  // delete method
  deleteProject(id:number){
    return this._http.delete<Project>('http://localhost:3000/projects/'+id);
  }


  


}
