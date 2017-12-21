import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { ImageUploadModule } from "angular2-image-upload";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { SuccessComponent } from './success/success.component';
import {FilterPipe, SortByPipe} from './pipe';
import { NewAddComponent } from './new-add/new-add.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent,
    FilterPipe, 
    SortByPipe, NewAddComponent
  ],
  imports: [
    ImageUploadModule.forRoot(),
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
