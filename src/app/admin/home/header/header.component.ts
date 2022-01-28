import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:any;
  constructor(public loginService:LoginService) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage["currentUser"]);
    console.log("currentUser >>",this.user);
      
  }

  

}
