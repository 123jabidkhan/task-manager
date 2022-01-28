import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  date:any;
  designation:string='';
  username:string='';
  noOfTeamMembers:number=50;
  totalCostOfAllProjects:number=0;
  pendingTasks:number=0;
  upComingProjects:number=0;
 
  projectCost:number=0;
  currentExpanditure:number=0;
  availableFunds:number=0;

  panelOpenState = true;
  projectName:string='';

  teamMembersSummary:any[]=[];
  teamMembers:any=[];
  teamStatus:any[]=[];
  clients:any=[];
  projects:any=[];
  years:any=[];


  constructor() { }

  ngOnInit(): void {

    this.date = new Date();
    this.designation='TEAM LEADER';
    this.username='John Deo';
 

    // team members summary
    this.teamMembersSummary=[
      {'region':'East','count':10,'unAvailable':5},
      {'region':'West','count':15,'unAvailable':2},
      {'region':'South','count':20,'unAvailable':6},
      {'region':'North','count':5,'unAvailable':7}
    ];

    // team members
    this.teamMembers=[
      {"region":"East","members":[
        {"id":1,"name":"Lord","status":'Available',},
        {"id":2,"name":"Morrsi","status":'Busy',},
        {"id":4,"name":"George","status":'Busy',},
        {"id":5,"name":"Ruthurd","status":'Available',},
      ]},

      {"region":"West","members":[
        {"id":1,"name":"Ruthorford","status":'Available',},
        {"id":2,"name":"Chrissmoss","status":'Busy',},
        {"id":4,"name":"Million Merry","status":'Busy',},
        {"id":5,"name":"Crists","status":'Available',},
      ]},

      {"region":"South","members":[
        {"id":1,"name":"Mohan Reddy","status":'Available',},
        {"id":2,"name":"Morrsi","status":'Busy',},
        {"id":3,"name":"Rajesh","status":'Busy',},
        {"id":4,"name":"GouthamRavi","status":'Available',},
      ]},

      {"region":"North","members":[
        {"id":1,"name":"Lord","status":'Available',},
        {"id":2,"name":"Morrsi","status":'Busy',},
        {"id":3,"name":"George","status":'Busy',},
        {"id":4,"name":"Ruthurd","status":'Busy',},
      ]},
    ];



    // clients
    this.clients=[
      "INFOSYS","ABC TECHNOLOGIES","INFOTECH","CREATIVE INFO SOLUTIONS"
    ]

    // projects
    this.projects=[
      "Project A","Project B","Project C","Project D"
    ]

    // years
    for(let i=2021;i>=2015;i--){
      this.years.push(i);
    }

  }

  onChangeProject(e:any){
    this.projectName = e.target.innerHTML;

    if(this.projectName === 'Project A'){
      this.projectCost = 16000;
      this.currentExpanditure=2000;
      this.availableFunds=5000;
    }else if(this.projectName === 'Project B'){
      this.projectCost = 35000;
      this.currentExpanditure=5000;
      this.availableFunds=10000;
    }
    else if(this.projectName === 'Project C'){
      this.projectCost = 25000;
      this.currentExpanditure=3000;
      this.availableFunds=2000;
    }
    else if(this.projectName === 'Project D'){
      this.projectCost = 45000;
      this.currentExpanditure=12000;
      this.availableFunds=30000;
    }

 
  }
  

}
