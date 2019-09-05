import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class UpdatedetailsService {

  constructor(private http: Http) {
    



  }



  updateprofile(details)
  { 
    
    console.log(details + 'in update');
    
    return this.http.post("http://localhost:3000/users", (details));
  }
}
