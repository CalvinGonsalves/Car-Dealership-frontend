import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './../auth.service';
@Component({
  selector: 'app-carnavbar',
  templateUrl: './carnavbar.component.html',
  styleUrls: ['./carnavbar.component.css']
})
export class CarnavbarComponent  {
carmodel : any;
  constructor(private http : Http,private authService: AuthService) { }


  OnSearch (carmodel){
    console.log(carmodel.value)
    this.http.get('http://localhost:3000/api/car' + '/' + carmodel.value).subscribe(response => {
      this.carmodel = response.json();
    });

  }

}

  


