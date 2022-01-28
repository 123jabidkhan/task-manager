import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray } from '@angular/forms';
import { Country } from '../country';
import { CountriesService } from '../countries.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  countries!:Country[];
  signUpForm!:FormGroup;
  constructor(private countriesService:CountriesService,private fb:FormBuilder) { }


  ngOnInit(): void {

    
    this.countries = this.countriesService.getCountries();

    this.signUpForm = this.fb.group({

      firstName :[null,[Validators.required,Validators.minLength(3)]],
      lastName :[null,[Validators.required,Validators.maxLength(3)]],
      email :[null,[Validators.required,Validators.email]],
      mobile :[null,[Validators.required,Validators.pattern(/^[789]\d{9}$/)]],
      dob :[null,[Validators.required]],
      gender:[null,[Validators.required]],
      countryID:[null,[Validators.required]],

      skills:this.fb.array([
        this.fb.group({
          skillName :null,
          skillLevel :null
        })
      ]),
    
      authData :this.fb.group({
        username :null,
        password :null,
      }),

    
    })

  
  }

  // get skills from form 
  get skills() : FormArray {
    return this.signUpForm.get("skills") as FormArray
  }


  // adding skil group
addNewSkills(){
  var formGroup = this.fb.group({
    skillName :null,
    skillLevel :null

  });
  (<FormArray>this.signUpForm.get('skills')).push(formGroup);
}

// removing skill group
removeSkill(i:number){
  (<FormArray>this.signUpForm.get('skills')).removeAt(i);
}

// submitSignupForm
submitSignupForm(){
  console.log(" submitRegisterForm >>",this.signUpForm.value);
}

}
