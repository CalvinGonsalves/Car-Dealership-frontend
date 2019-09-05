import { AuthGuard } from './auth-guard.service';
import { ProductsService } from './products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.components';
import { FavouriteComponent } from './favourite/favourite.component';
import { PhonenumberPipe } from './phonenumber.pipe';
// import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { CarsComponent } from './cars/cars.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { CarnavbarComponent } from './carnavbar/carnavbar.component';
import { AuthService } from './auth.service';
// import { MyprofileComponent } from './myprofile/myprofile.component';
import { ToasterService } from './toaster.service';
import { FootComponent } from './foot/foot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';
import { CompareValidatorDirective } from './shared/compare-validator.directive'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdAlertBasic } from './alert-basic';

// import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    
    FavouriteComponent,
    PhonenumberPipe,
    // ContactFormComponent,
    PostsComponent,
    CarsComponent,
    SinglepostComponent,
 
    HomeComponent,
    // LoginComponent,
    CarnavbarComponent,
    // MyprofileComponent,
    FootComponent,
    CompareValidatorDirective,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    HttpModule,
    // MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'posts',component: PostsComponent},
      // {path:'posts/:username',component: ProfileComponent},
      {path:'login', loadChildren:  "../app/login/login.module#LoginModule"},
      {path:'contact', loadChildren: "../app/contact-form/contact-form.module#ContactFormModule"},
      {path:'myprofile',loadChildren : "../app/myprofile/myprofile.module#MyprofileModule", canActivate: [AuthGuard] },
      // {path:'contact/:modelname',component: ContactFormComponent},

      // {path:'**',component: NotfoundComponent}
      
      
    ])


  ],
  providers: [
    AuthService,

    ProductsService,
    ToasterService,
    AuthGuard
    
  ],  // dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
