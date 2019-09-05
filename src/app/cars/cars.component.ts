import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {
car: any[];
  constructor(private http : Http) { 

    http.get('http://localhost:3000/api/car').subscribe(response => { 
      this.car = response.json();
    })



  }


  // OnSearch(carmodel){
  //   this.http.get('http://localhost:3000/api/car' + '/' + carmodel).subscribe(response => {
  //     this.car = response.json();
  //   })

  // }


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
   

}
