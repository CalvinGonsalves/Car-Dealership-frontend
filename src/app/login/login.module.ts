import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule  } from "./login-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [CommonModule, LoginRoutingModule,FormsModule,
    ReactiveFormsModule,
    NgbModule],
  declarations: [LoginComponent]
})
export class LoginModule {}