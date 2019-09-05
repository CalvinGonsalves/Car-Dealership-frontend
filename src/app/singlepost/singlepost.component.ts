import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent  {
post :any;

postId:any;
http: any;

constructor(http: Http) {  
    this.http = http;
    this.post ={};
}

onKeyUp () {

  console.log(this.postId); 
  // this.email = "";
  console.log("Enter was pressed");
  this.http.get('https://jsonplaceholder.typicode.com/posts/'+this.postId).subscribe(response => { 
    this.post = response.json();
    console.log(this.post);

  })

}

  

}