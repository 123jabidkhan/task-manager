import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginViewModel:LoginViewModel = new LoginViewModel();
  loginError:string=''
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  onLoginClick(event:any){
    this.loginService.Login(this.loginViewModel).subscribe(
      (res)=>{
        console.log("result >>",res);
        
        // ..
        localStorage.setItem("currentUser", (JSON.stringify(res)));
        // ..

        this.router.navigateByUrl('/dashboard');
      },
      (error)=>{
        console.log(error);
        this.loginError='invalid username and password';
      }

    )
  }

}
