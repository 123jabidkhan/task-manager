import { Component, OnInit } from '@angular/core';
import { ClientLocation } from 'src/app/project-models/client-location';
import { ClientLocationsService } from 'src/app/project-services/client-locations.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-client-locations',
  templateUrl: './client-locations.component.html',
  styleUrls: ['./client-locations.component.scss']
})
export class ClientLocationsComponent implements OnInit {

  clientLocations:ClientLocation[]=[];
  newClientLocationForm!:FormGroup;
  updateClientLocationForm!:any;
  currentLocation!:any;
  locationId!:any;

  isCreateFormVisible:boolean=false;
  isUpdateFormVisible:boolean=false;
  constructor(private clientLocationsService:ClientLocationsService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getClientLocations();

     // create form
     this.newClientLocationForm = this.fb.group({
      clientLocationID:this.fb.control(null),
      clientLocationName:this.fb.control(null,[Validators.required])
    })
  }



  // get locations
  getClientLocations(){
    this.clientLocationsService.getClientLocations().subscribe((response:any)=>{
      console.log('getClientLocations >>',response);
      this.clientLocations = response;
    })
  }

  // show location form
  locationFormShow(){
    this.isCreateFormVisible = true;
    this.isUpdateFormVisible=false;
    console.log(this.isCreateFormVisible)
  }

  // create new location
  onSaveClick(){
    if(this.newClientLocationForm.valid){
      this.clientLocationsService.createClientLocation(this.newClientLocationForm.value).subscribe((response)=>{

        console.log(response);
        this.getClientLocations();
  
        // resetform
        this.newClientLocationForm.reset();
  
      },(error)=>{
        console.log("error");
      })
    }
  }


  // get country by id
getLocation(id:number){
  this.clientLocationsService.getCurrentClientLocation(id).subscribe((response:any)=>{
    // console.log(response);
    this.currentLocation=response;
    console.log(this.currentLocation.clientLocationName)

    this.locationId = this.currentLocation.id;
    console.log(this.locationId);

    this.isUpdateFormVisible=true;
    this.isCreateFormVisible = false;
   
  
  })
}


// update location form 

updateFormSubmitted(location:any){
 
  var uLocation:ClientLocation=new ClientLocation();
  uLocation.clientLocationID = this.currentLocation.id;
  uLocation.clientLocationName = location.value.clientLocationName;
  uLocation.id=this.locationId
   console.log(uLocation);

   this.clientLocationsService.updateCurrentClientLocation(this.locationId,uLocation).subscribe((res:any)=>{
      console.log(uLocation);
      console.log('form updated..!!');
      this.getClientLocations();
      
      this.isUpdateFormVisible=false;
      
    },(error)=>{
      console.log(error);
    })
  
}


// delete location 
deleteLocation(id:number){
  this.getClientLocations();

  this.clientLocationsService.deleteClientLocation(id).subscribe((res:any)=>{
    console.log('location deleted successfully.!!');
    this.getClientLocations();

  });
}
  

}
