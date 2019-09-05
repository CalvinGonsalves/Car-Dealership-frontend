import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { ToasterService } from './../toaster.service';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  implements OnInit{

reactiveForm1: FormGroup;
  
selectedOption: any;
selectedtext: any;
currentcar : any; 
carprice : any;
val: any;
contact: any;



constructor (private authService: AuthService, private router: Router, private route: ActivatedRoute,private http : Http,private toasterService: ToasterService){}

log(x)
{
  console.log(x);
}

ngOnInit () {

  // this.createForm();
 this.currentcar = this.route.snapshot.params['id1'];
 this.carprice = this.route.snapshot.params['id2'];
  
  console.log(this.currentcar);
  console.log(this.carprice);

}

// createForm() {
//   this.reactiveForm1 = new FormGroup({
//     firstname: new FormControl('', Validators.required),
//     lastname: new FormControl('', Validators.required),
//     email: new FormControl(null, Validators.email),
//     message: new FormControl('', Validators.required)

//   })
// }


// isValid(controlName) {
//   return this.reactiveForm1.get(controlName).invalid ;
// }

createContact(firstname,lastname,email,phone,message){
  console.log(message.value + "inside create");
    // let model = {modelname: input.value};
    // let price = {price: input2.value};
    // let Engine = {Engine: input3.value};
    let obj = {

      Firstname: firstname.value,
      Lastname: lastname.value,
      Email: email.value,
      Phone: phone.value,
      Message: message.value

    }

// console.log(firstname.value);

firstname.value = "";
lastname.value = "";
email.value = "";
phone.value = "";
message.value = "";
    this.http.post('http://localhost:3000/api/contact', obj)
              .subscribe(response=>{
                obj['id'] = response.json()._id;
                
                // this.contact.splice(0,0,obj);
  
              })

              this.toasterService.Success("Form Received");
  
  } 



  selectChangeHandler(event:any) {
    this.selectedOption = event.target.value;
    console.log(event.target.value);

    if (this.currentcar === "undefined")
    {
      event.target.value = "other";
      console.log(event.target.value);
    }
    
    switch(event.target.value) { 
      case '1': {
         this.selectedtext = "I'd like to know if the " + this.currentcar + " you have listed on Cooper Automotive Dealers for " + this.carprice + " is still available." ;
         console.log(this.selectedtext);
         break; } 
      
      case '2': { 
         this.selectedtext = "I'd like to request additional photos of the " + this.currentcar + " you have listed on Cooper Automotive Dealers for $" + this.carprice + "." ;
         break; 
      } 
      case '3': { 
         this.selectedtext = "I'd like to schedule a test drive with the " + this.currentcar + " you have listed on Cooper Automotive Dealers for $" + this.carprice +  "." ;
         break; 
      } 
      case 'other': {
        this.selectedtext = "" ;
         break;
      }
      default: {
        this.selectedtext = "I'd like to know if the " + this.currentcar + " you have listed on Cooper Automotive Dealers for $" + this.carprice + " is still available." ;
         console.log(this.selectedtext);
         break;
      } 
   } 
  }

}
