import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {UserService} from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FilterPipe, SortByPipe} from '../pipe'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {
  user = null;
  imgs: any = []
  name = '';

  constructor(
    private _us:UserService,
    private _router: Router,
    private _route:ActivatedRoute,
  ) { 
    this._route.paramMap.subscribe( params =>{
      this.name = params.get('name');
  } )
  }

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
    console.log(this.name)
    this.create()
    this._us.allImg().subscribe(
      (success)=>{this.imgs = success},
      (err)=>{console.log('erors')},
    );
    
  }

}
