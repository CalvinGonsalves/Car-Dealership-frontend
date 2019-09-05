import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  MyprofileComponent } from './myprofile.component'


const routes: Routes = [
    { path: "", component: MyprofileComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class MyprofileRoutingModule { }