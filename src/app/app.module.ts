import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatCardModule,MatMenuModule,MatDividerModule, MatIconModule,MatExpansionModule,MatChipsModule, MatGridListModule, MatToolbarModule} from '@angular/material';
import { AllProductsComponent } from './all-products/all-products.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import {AngularFireModule} from "angularfire2";
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from "../environments/environment";
import { SignupComponent } from './signup/signup.component';
import {AuthenticateService} from "./authenticate.service";
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
 @NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    SigninComponent,
    IndexComponent,
    SignupComponent
  ],
  imports: [
    MatDividerModule,
    MatExpansionModule,
    MatToolbarModule,
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
