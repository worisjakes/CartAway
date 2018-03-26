import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from './authenticate.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status:boolean
  constructor(private afuth:AngularFireAuth, private service:AuthenticateService) {
    this.afuth.auth.onAuthStateChanged(user=>{
      if(user){
        this.status= true;
      }else{
        this.status=false;
      }

    })
   }
   logout(){
     this.service.logout();
   }
   
  ngOnInit(){
    
  }

}
