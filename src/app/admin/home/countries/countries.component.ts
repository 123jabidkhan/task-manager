import { Component, OnInit} from '@angular/core';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { UsersCountry } from 'src/app/project-models/users-country';
import { CountriesService } from 'src/app/project-services/countries.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Country } from 'src/app/auth/country';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries:UsersCountry[]=[];
  newForm!:FormGroup;
  updateForm!:any;
  countryId!:any;

  currentCountry!:any;

  isCreateFormVisible:boolean=false;
  isUpdateFormVisible:boolean=false;

  // @ViewChild('defaultTextBox_New') defaultTextBox_New:
  // ElementRef;
  // @ViewChild('defaultTextBox_Edit') defaultTextBox_Edit:
  // ElementRef;

  constructor(private router:ActivatedRoute,private countriesService:CountriesService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAllCountries();

    // create form
    this.newForm = this.fb.group({
      countryId:this.fb.control(null),
      countryName:this.fb.control(null,[Validators.required]),
    })

    // getting current project id

   
 

  }

  // onNewClick(event:any){
  //   setTimeout(()=>{
  //     this.defaultText
  //   })
  // }

getAllCountries(){
  this.countriesService.getCountries().subscribe((result:any)=>{
    console.log("user-countries >>",result);
    this.countries = result;
  });
}

// country form show
countryFormShow(){
  this.isCreateFormVisible = true;
  this.isUpdateFormVisible=false;
  console.log(this.isCreateFormVisible)
}






// save newForm
onSaveClick(){
  if(this.newForm.valid){
    this.countriesService.createCountry(this.newForm.value).subscribe((response)=>{

      console.log(response);
      this.getAllCountries();

      // resetform
      this.newForm.reset();

    },(error)=>{
      console.log("error");
    })
  }
}


// get country by id
getCountry(id:number){
  this.countriesService.getCurrentCountry(id).subscribe((response:any)=>{
    // console.log(response);
    this.currentCountry=response;
    console.log(this.currentCountry.countryName)

    this.countryId = this.currentCountry.id;
    console.log(this.countryId);


    this.isUpdateFormVisible=true;
    this.isCreateFormVisible = false;
   
  
  })
}

// update form submitted
updateFormSubmitted(country:any){
 
  var uCountry:UsersCountry=new UsersCountry();
  uCountry.countryId = this.currentCountry.id;
  uCountry.countryName = country.value.countryName;
  uCountry.id=this.countryId
   console.log(uCountry);
   this.countriesService.updateCountry(this.countryId,uCountry).subscribe((res:any)=>{
      console.log(uCountry);
      console.log('form updated..!!');
      this.getAllCountries();
      
      this.isUpdateFormVisible=false;

    },(error)=>{
      console.log(error);
    })
  
}


// delete country 
deleteCurrentCountry(id:number){
  this.getAllCountries();

  this.countriesService.deleteCountry(id).subscribe((res:any)=>{
    console.log('country deleted successfully.!!');
    this.getAllCountries();

  });
}


}
