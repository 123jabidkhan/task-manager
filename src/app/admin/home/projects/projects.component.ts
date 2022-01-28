import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/project-services/projects.service';
import { Project } from 'src/app/project-models/project';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { ClientLocationsService } from 'src/app/project-services/client-locations.service';
import { ClientLocation } from 'src/app/project-models/client-location';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  clientLocations:ClientLocation[]=[];
  currentProject!:Project[];
  projects:Project[]=[];
  projectForm!:Project;
  totalProjects!:number;
  
  constructor(private projectsService:ProjectsService, private clientLocationsService:ClientLocationsService, private router:ActivatedRoute) { }


  ngOnInit(): void {
    this.getProjectsData();
    this.getClientsData();
    

    // update project
    let params = this.router.snapshot.params;
    console.log(params);
    this.projectsService.getCurrentProject(params.id).subscribe(res => {
      console.log("currentProjectData >>",res);
      this.currentProject = res;
    })
  }

  // get client locations
  getClientsData(){   
    this.clientLocationsService.getClientLocations().subscribe(
      (res)=>{
        this.clientLocations = res;
        console.log("clientLocations >>",this.clientLocations);
      },
    );
  }

   // get projects 
   getProjectsData(){   
    this.projectsService.getAllProjects().subscribe(
      (res)=>{
        this.projects = res;
        this.totalProjects=this.projects.length;
        console.log("projects data =>",res);
      },
    );
  }

  




  // post
  onSubmitData(form:any){
    this.projectsService.insertProject(form.value).subscribe(
      (res)=>{
        this.getProjectsData();
        form.reset();
        window.location.replace('http://localhost:4200/projects');
        console.log(res);
      }
    )    
  }

  
  

}
