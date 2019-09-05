
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactFormRoutingModule  } from "./contact-form-routing.module";
import { ContactFormComponent } from "./contact-form.component";

@NgModule({
  imports: [CommonModule, ContactFormRoutingModule,FormsModule,
    ReactiveFormsModule],
  declarations: [ContactFormComponent]
})
export class ContactFormModule {}