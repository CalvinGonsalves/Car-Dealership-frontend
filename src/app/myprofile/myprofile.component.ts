import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ToasterService } from './../toaster.service';
import { UpdatedetailsService } from '../updatedetails.service';
import { UploadcarService } from '../uploadcar.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  opt1: boolean = false;
  opt2: boolean = true;
  file: File;
  selectstatus: any;

  constructor(private http: Http, 
    private authService: AuthService, 
    private router: Router, 
    private toasterService: ToasterService, 
    private updateservice: UpdatedetailsService, 
    private uploadcarservice: UploadcarService, 
    private toastr: ToastrService) { }

  // ngOnInit() {
  // }


  onFileChanged(event) {
    this.file = event.target.files[0]
    console.log(this.file)

  }
  Uploadcar(make, modelname, price, engine, status, year) {
    console.log(status);





    this.uploadcarservice.uploadcars(make.value, modelname.value, price.value, engine.value, this.file, year.value, this.selectstatus).subscribe(response => {
      // obj['id'] = response.json()._id;
      console.log(response.json());


      if (response.json())
      {

        this.toasterService.Success("Car Deatils Uploaded");
      }
    })

    

  }

  CarDetails() {
    

    this.opt1 = false;
    this.opt2 = true;

  }

  ProfileSetting() {
    

    this.opt1 = true;
    this.opt2 = false;

  }



  UpdateProfile(firstname, lastname, phone, email, newpass, cnfpass) {


    if (newpass.value === cnfpass.value) {
      let obj2 = {
        Firstname: firstname.value,
        Lastname: lastname.value,
        Phone: phone.value,
        email: email.value,
        psw: newpass.value
      }

      console.log(email.value + newpass.value)


      this.updateservice.updateprofile(obj2).subscribe(response => {
        console.log(response.json());
      })

    }


    else {
      this.toastr.error("password Mismatch", 'Error');

    }

  }


}
