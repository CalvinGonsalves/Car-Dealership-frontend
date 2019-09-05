import {ProductsService} from './products.service'
import {Component} from '@angular/core'


@Component({
    selector: 'products',  //custom html tag
    styles: [`
    .available{
        color:blue;
    }
    .unavailable{
        color: red;
    }
  
    `],
    template: `<h2>{{ getTitle() }}</h2>   
                <ol>
                    <li *ngFor = "let product of products">{{product}}</li>
                </ol>
                <h3 [ngClass]="{available:isActive, unavailable:!isActive}"   (click)="onclick()">Hello !!!</h3>


                <div [ngClass] = "{myclass1 : myvalue, myclass2 : myvalue}">

                        This is div with myclass 1
                </div>

                <img [src] ="imgURL"/> 
                <button  class = "btn btn-primary" [class.active]="isActive">Save</button>
                <br>
                <br>
                <span  [class] = "isActive ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'"  (click)= "onclick()" ></span>
                <br>
                
                <span  class = {{icon}} (click)= "onclick()" ></span>

                `  
})                //[src] property binding

export class ProductsComponent{
    myvalue : boolean;
    isAvailable = true;
    Isclicked = false;
title = "List of Products";
isActive : boolean;
icon : String;
products;
// products = ["product1","product2","product3"];
// isActive = true;

onclick(){
    if (this.isActive) {
    this.icon = "glyphicon glyphicon-star"
    this.isActive = false ;
    }
    else{

        this.icon = "glyphicon glyphicon-star-empty"
        this.isActive = true;
    }
    
}


constructor (service:ProductsService){

    this.myvalue = true;
    this.products = service.getProducts();
}

getTitle(){
    return  this.title;
}
}