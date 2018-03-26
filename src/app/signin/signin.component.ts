import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthenticateService} from "../authenticate.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email:string="";
 password:string="";
 isloggedin:boolean= false;
  constructor( private auth: AuthenticateService) { }
  login(provider:string):void{
    
  this.auth.login(provider, this.email, this.password);
  
  
}
  logout():void{
    this.auth.logout()
  }
  ngOnInit() {
    
  }
  

}
