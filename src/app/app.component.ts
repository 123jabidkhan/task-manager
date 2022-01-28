import { Component } from '@angular/core';
import { fadeAnimation } from './my-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskManager';
  opened=true;
  constructor(){}
  toggleSidebar(){
    this.opened=!this.opened;
  }

  getState(outlet:any){
    return outlet.isActivated?outlet.activatedRoute.snapshot.url[0].path:'none';
  }
  

}
