import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { Project } from 'src/app/project-models/project';
import { ProjectsService } from 'src/app/project-services/projects.service';
// import { EventEmitter } from 'stream';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input('currentProject')project!:Project;
  @Input('currentProjectIndex')i!:number;

  @Output() deleteClick = new EventEmitter();
  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {
  }


 
  getAllProjects(){
    this.projectsService.getAllProjects().subscribe(res=>{
      console.log(res);
    })
  }

 dellProject(id:number){
  this.projectsService.deleteProject(id).subscribe(res=>{
    console.log('deleted!');
    this.getAllProjects();

  });
}
  

}
