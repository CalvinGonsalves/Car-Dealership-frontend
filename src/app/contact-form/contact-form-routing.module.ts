import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  ContactFormComponent } from './contact-form.component'


const routes: Routes = [
    { path: "", component: ContactFormComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ContactFormRoutingModule { }