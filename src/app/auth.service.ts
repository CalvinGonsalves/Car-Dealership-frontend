import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import { ToastrService } from 'ngx-toastr';      

import 'rxjs/add/operator/map'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentUser: any;

constructor(private http: Http, private toastr: ToastrService) {
  let token = localStorage.getItem('token');
  if (token) {
    let jwt = new JwtHelper();
    this.currentUser = jwt.decodeToken(token);
  }
}

errorsmsg(msg){  
  this.toastr.error(msg,'Error')  

} 

register(credentials) {
  console.log(credentials);
  
  return this.http.post('http://localhost:3000/register',credentials)
    .map(response => {
      let result = response.json();
      console.log(result.message);
      if (result)
      {
        return result.message;
        
        
      }
      else {
        return true;
      }
    });

}
login(credentials) { 
  
  console.log(credentials + "in login service");
  return this.http.post('http://localhost:3000/login', credentials)
   .map(response => {
     let result = response.json();
     console.log(response);
     if (result && result.token) {
       localStorage.setItem('token', result.token);

       let jwt = new JwtHelper();
       this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
        console.log(this.currentUser.password + "1");
       return true; 
     }
     else { 
       console.log(result.message);
     return result.message;
     } 
   });
 }


 logout(){
   localStorage.removeItem('token');
   this.currentUser = null;
 }

 isLoggedIn () {
   return tokenNotExpired('token');
 }
}
