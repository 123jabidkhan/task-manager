import { Project } from "src/app/project-models/project";

export class Task {
    taskId!:number | any;
    taskName!:string | any;
    description!:string | any;
    createdOn!:number | any;
    projectId!:number | any;
    createdBy!:string | any;
    assignedTo!:string | any;
    taskPriorityId!:number | any;
    lastUpdatedOn!:number | any;
    currentStatus!:number | any;
    currentTaskStatusId!:number | any;

    project!:Project | any;
    createdByUser!:any;
    assignedToUser!:any;
    taskStatusDetails!:any;


    // .....

    constructor(){
        this.taskId=null;
        this.taskName=null;
        this.description=null;
        this.createdOn=null;
        
        this.projectId=null;
        this.createdBy=null;
        this.assignedTo=null;
        this.taskPriorityId=null;
        this.lastUpdatedOn=null;
        this.currentStatus=null;
        this.currentTaskStatusId=null;
    
        this.project=null;
        this.createdByUser=null;
        this.assignedToUser=null;
        this.taskStatusDetails=null;
        this.currentTaskStatusId=null;



    }

}
