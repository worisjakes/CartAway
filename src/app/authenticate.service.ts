import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Injectable()
export class AuthenticateService {

  constructor( public afAuth: AngularFireAuth, private router:Router, private spinnerService: Ng4LoadingSpinnerService) {
  }
  login(provider:string, email:string, password:string){
  switch (provider){
    case "facebook":
    this.spinnerService.show();
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(data=>{
        this.router.navigate(["/index"])
        this.spinnerService.hide();
      }).catch(()=>{
        this.spinnerService.hide()
      })
      break;
    case "google":
      this.spinnerService.show();
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data=>{
         this.router.navigate(["/index"])
         this.spinnerService.hide();
      }).catch(()=>{
        this.spinnerService.hide();
      })
      break;
    case "custom":
      this.spinnerService.show();
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(data =>{
    this.router.navigate(["/index"])
    this.spinnerService.hide();
  }).catch(error=>{
      this.spinnerService.hide();
  })
    break;
  }
}
logout(){
    this.afAuth.auth.signOut().then(()=>{this.router.navigate(["/index"])
});
  }
}
  
