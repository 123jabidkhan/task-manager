import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginViewModel } from './login-view-model';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) 
  { }
  
  currentUserName:any = null; 

  public Login(loginViewModel:LoginViewModel):Observable<any>{
    return this._http.post<any>('http://localhost:9090/api/projects',loginViewModel,{responseType:'json'})
    .pipe(map((user)=>{
      if(user){
        this.currentUserName = user.userName;
        console.log("currentUserName >>",this.currentUserName);
        sessionStorage.currentUser = JSON.stringify(user);
      }
      return user;
    }))
  }

  public Logout(){
    sessionStorage.removeItem('currentUser');
    this.currentUserName = null;
    console.log("after logout currentUserName >>",this.currentUserName);
    
  }

}
