import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  getPaises() {
    return this.http.get(`https://restcountries.com/v3.1/all`)
  }

  getPaisByName(name:string)
  { 
    var url = "`https://restcountries.com/v3.1/name/${name}`";
    console.log(url);
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }
}
