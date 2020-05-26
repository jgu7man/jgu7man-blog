import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from './material.module';
import { environment } from "src/environments/environment";

import { AngularFireModule, } from "@angular/fire";
import { AngularFirestoreModule, } from "@angular/fire/firestore";
import { AngularFireStorageModule, } from "@angular/fire/storage";
import { AngularFireAuthModule, } from "@angular/fire/auth";
import { AngularFireMessagingModule, } from '@angular/fire/messaging';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



