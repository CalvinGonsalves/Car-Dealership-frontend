import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  isButton = true;
  isPrimary = false;
  isbig = false;
  isbubble = false;

  
  toggleButton(){
    this.isPrimary = !this.isPrimary;
  }
  toggleBigButton(){
    this.isbig = !this.isbig;
  }
  toggleAnimation(){
    this.isbubble = !this.isbubble;
  }

  contentHighlighted : boolean = false;


// users = ['A','B','C','D'];

getCSSClasses(flag:String){

  let cssClasses;
  if(flag == 'nightMode') {  
    cssClasses = {
      'one': true,
      'two': true 
                  }	
        } else {  
        cssClasses = {
        'two': true,
        'four': false 
        }	
        }
    return cssClasses;
    }	
email = "abc@gmail.com";
onKeyUp () {

    console.log(this.email); 
    this.email = "";
    console.log("Enter was pressed");
  
}

onSave($event)
{
  console.log("Clicked");
  
}


// isActive : boolean;
// icon : String;

//   onclick(){
//     if (this.isActive) {
//     this.icon = "glyphicon glyphicon-star"
//     this.isActive = false ;
//     }
//     else{

//         this.icon = "glyphicon glyphicon-star-empty"
//         this.isActive = true;
//     }
    
  


// }


  constructor() { }

  ngOnInit() {
  }

}
