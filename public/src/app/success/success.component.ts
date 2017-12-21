import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {UserService} from './../user.service';
import { Router } from '@angular/router';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FilterPipe, SortByPipe} from '../pipe'
import {BrowserModule} from '@angular/platform-browser'


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  user = null;
  imgs: any = []

  constructor(
    private _us:UserService,
    private _router: Router
  ) {}
    
  create(){
    this._us.loggedIn.subscribe(
      (success) => {
        console.log(success)
        if(success === false){
          console.log("hello")
          this.user=null;
          this._router.navigate(['login']);
          return
        }
        else{
        this.user=success
        }
      },
      (err) => {console.log('err')}
    )
    
  }

 
  logout(){
    this._us.clearUser();
    this.user= null;


    return this._router.navigate(['login']);
  }
  
  ngOnInit() {
    this.create()
    this._us.allImg().subscribe(
      (success)=>{this.imgs = success},
      (err)=>{console.log('erors')},
    );
    
  }

  deleteImg(id){
    this._us.deleteImg(id)
    this._us.allImg().subscribe(
      (success)=>{this.imgs = success},
      (err)=>{console.log('erors')},
    );
  }

}
