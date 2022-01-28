import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/project-services/projects.service';
import { Project } from 'src/app/project-models/project';
import { ActivatedRoute } from '@angular/router';
import { ClientLocationsService } from 'src/app/project-services/client-locations.service';
import { ClientLocation } from 'src/app/project-models/client-location';


@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {
  clientLocations:ClientLocation[]=[];
  currentProject!:any;
  constructor(private  projectsService:ProjectsService,private clientLocationsService:ClientLocationsService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getClientsData();
    let params = this.router.snapshot.params;
    console.log(params);
    this.projectsService.getCurrentProject(params.id).subscribe(res => {
      console.log("currentProjectData >>", res);
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

  // update form
  updateProjectForm(form:any){
    let params = this.router.snapshot.params;
    console.log(form.value);
    
    this.projectsService.updateProject(params.id, form.value).subscribe(res=>{
    console.log('project updated..!!');
    window.location.replace('http://localhost:4200/projects');

      
    })
  }
  cancelUpdate(){
    window.location.replace('http://localhost:4200/projects');
  }

}
