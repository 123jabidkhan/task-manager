import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientLocation } from '../project-models/client-location';
@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService {

  constructor(private httpClient:HttpClient) { }
  //  get countries
  getClientLocations():Observable<ClientLocation[]>{
    return this.httpClient.get<ClientLocation[]>('http://localhost:3000/clientLocations',{responseType:"json"});
  }


  // create client location
  createClientLocation(location:ClientLocation):Observable<ClientLocation>{
    return this.httpClient.post<ClientLocation>('http://localhost:3000/clientLocations',location);
 }

  // get current location
  getCurrentClientLocation(id:number){
    return this.httpClient.get<any[]>("http://localhost:3000/clientLocations/"+id)
  }

  // update location
  updateCurrentClientLocation(id:number,location:ClientLocation):Observable<any>{
    return this.httpClient.put<any>('http://localhost:3000/clientLocations/'+id,location);
  }


  // delete location
  deleteClientLocation(id:number){
    return this.httpClient.delete<any>('http://localhost:3000/clientLocations/'+id);
  }

}
