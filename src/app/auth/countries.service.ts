import { Injectable } from '@angular/core';
import { Country } from './country';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }
  getCountries():Country[]{
    return [
      new Country(1,"India"),
      new Country(2,"USA"),
      new Country(3,"Japan"),
      new Country(4,"Italy"),
      new Country(5,"England"),

    ]
  }
}
