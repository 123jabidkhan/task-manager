import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersCountry } from '../project-models/users-country';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient:HttpClient) { }

  // get
  getCountries():Observable<UsersCountry>{
    return this.httpClient.get<UsersCountry>('http://localhost:3000/countries');
  }

  // post
  createCountry(country:UsersCountry):Observable<UsersCountry>{
     return this.httpClient.post<UsersCountry>('http://localhost:3000/countries',country)
  }


   // get current country
   getCurrentCountry(id:number){
    return this.httpClient.get<any[]>("http://localhost:3000/countries/"+id)
  }
  
  // put
  updateCountry(id:number,country:UsersCountry):Observable<any>{
    return this.httpClient.put<any>('http://localhost:3000/countries/'+id,country);
  }

  // delete country
  deleteCountry(id:number){
    return this.httpClient.delete<any>('http://localhost:3000/countries/'+id);
  }

}
