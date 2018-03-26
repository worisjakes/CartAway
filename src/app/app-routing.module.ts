import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";
import {IndexComponent} from "./index/index.component";
import {SignupComponent} from "./signup/signup.component";
const routes:Routes=[
  {path:"signup", component:SignupComponent},
  {path:"signin", component:SigninComponent},
  {path:"index", component :IndexComponent},
  {path:"", redirectTo:"/index", pathMatch:"full"}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
