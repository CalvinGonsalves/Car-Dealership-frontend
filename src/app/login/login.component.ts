import { ToasterService } from './../toaster.service';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from './../auth.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
// import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { compareValidator } from '../shared/compare-validator.directive';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;

  user: any[];
  reg: boolean = false;
  badpass: any;
  currentUser: any;
  myForm: FormGroup;
  constructor(private router: Router, private authService: AuthService, private toasterService: ToasterService, private toastr: ToastrService, private route: ActivatedRoute) {

    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cnfpassword: new FormControl(null)

    });
    this.myForm.controls.password.valueChanges.subscribe(
      x => this.myForm.controls.cnfpassword.updateValueAndValidity()
    )
  }

  ngOnInit() {

    this.createForm();
  }


  ///////
  createForm() {
    this.reactiveForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl('', Validators.required),
      cnfpassword: new FormControl('', [Validators.required, compareValidator('password')]),

    })
  }
  get username() {
    return this.reactiveForm.get('username');
  }
  get email() {
    return this.reactiveForm.get('email');
  }
  get password() {
    return this.reactiveForm.get('password');
  }
  get pwConfirm() {
    return this.reactiveForm.get('cnfpassword');
  }



  //////
  successmsg(msg) {
    this.toastr.success(msg, 'Success')
  }
  errorsmsg(msg) {
    this.toastr.error(msg, 'Error')

  }
  infotoastr(msg) {
    this.toastr.info(msg, 'Information');
  }
  toastrwaring(msg) {
    this.toastr.warning(msg, 'Warning');
  }
  // isValid(controlName) {
  //   return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  // }
  isValid(controlName) {
    return this.reactiveForm.get(controlName).invalid && this.reactiveForm.get(controlName).touched;
  }

  // passValidator(control: AbstractControl) {
  //   if (control && (control.value !== null || control.value !== undefined)) {
  //     const cnfpassValue = control.value;

  //     const passControl = control.root.get('password');
  //     if (passControl) {
  //       const passValue = passControl.value;
  //       if (passValue !== cnfpassValue || passValue === '') {
  //         return {
  //           isError: true

  //         };
  //       }
  //     }
  //   }

  //   return null;
  // }


  OnRegister1() {
    console.log("hello");
    if (this.reg) {
      this.reg = false;
    }
    else
      this.reg = true;

  }

  OnRegister(name, email, password) {
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);

    let obj = {
      username: name.value,
      email: email.value,
      psw: password.value
    }
    console.log(email.value);
    this.authService.register(obj).subscribe(response => {
      //  obj['id'] = response.json()._id;

      console.log(response + "register");
      if (response === "Register Success") {
        this.successmsg("Login with your credentials");
        this.reg = false;
      }
      else if (response === "A User with the same email already exists") {
        this.errorsmsg("A User with the same email already exists");

      }

      //  this.router.navigate(['/'])
    });
  }

  OnLogin(email, password) {
    console.log(email.value);
    console.log(password.value);
    let obj1 = {
      email: email.value,
      psw: password.value
    }
    this.authService.login(obj1).subscribe(response => {
      console.log(response);
      if (response===true){
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        
        this.router.navigate([ returnUrl || '/']);
      }
      else if (response === "The Email has not been registered") {
        console.log("invalid login");
        // this.badpass = "Invalid Login Credentials"
        this.errorsmsg("The Email has not been registered");
      } else {
        this.errorsmsg("Invalid Credentials");
      }
      //  obj['id'] = response.json()._id;
      //  this.user.splice(0,0,obj);
      console.log(response);
    })
    // ngOnInit() {
    // }

  }

}


