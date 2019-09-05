import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { MyprofileRoutingModule  } from "./myprofile-routing.module";
import { MyprofileComponent } from "./myprofile.component";

@NgModule({
  imports: [CommonModule, MyprofileRoutingModule,FormsModule],
  declarations: [MyprofileComponent]
})
export class MyprofileModule {}