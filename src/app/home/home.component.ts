import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showcar : boolean = false;
  mycar : any;
  usedcar : boolean =false;
  mycars(mycar){
    this.mycar = mycar;
    console.log(this.mycar);
  }
  car: any[];
  c: any;
  valuefilter : any;
  ngOnInit()
  {

    console.log('hello');
    this.http.get('http://localhost:3000/api/car').subscribe(response => { 
      this.car = response.json();

    })



  }
  constructor(private http : Http,private authService: AuthService, private router: Router) { 
    this.http.get('http://localhost:3000/api/car').subscribe(response => { 
      this.car = response.json();
    })
  }

filterfunc(){


if(this.valuefilter!=null){
  this.http.get('http://localhost:3000/api/car' + '/Make/' + this.valuefilter).subscribe(response => {
      this.car = response.json();
    })
}

}


  OnSearch(carmodel){
    console.log(carmodel)
    this.http.get('http://localhost:3000/api/car' + '/Make/' + carmodel.value).subscribe(response => {
      this.car = response.json();
    })

  }

  Usedcar() {
    this.http.get('http://localhost:3000/api/car' + '/used').subscribe(response => {
      this.car = response.json();
      this.usedcar =true;
    })

  }

  // createPost(input,input2,input3){

  //   // let model = {modelname: input.value};
  //   // let price = {price: input2.value};
  //   // let Engine = {Engine: input3.value};
  //   let obj = {

  //     modelname: input.value,
  //     price: input2.value,
  //     Engine: input3.value

  //   }
  //   // input.value = "";
  //   // input2.value = "";
  //   // input3.value = "";
  //   this.http.post('http://localhost:3000/api/car', obj)
  //             .subscribe(response=>{
  //               obj['id'] = response.json()._id;
                
  //               this.car.splice(0,0,obj);
  
  //             })
  
  // } 

  // OndeleteCar(c){
  //   console.log(c);
  //   this.http.delete('http://localhost:3000/api/car' + '/delete/' + c._id).subscribe(response=>{
  //     let index = this.car.indexOf(c);
  //     this.car.splice(index,1);
  //   })
  // }

  OnBuyCar(c){

      this.router.navigate(['contact',{id1:c.modelname,id2:c.price}]);


  }
   

}
