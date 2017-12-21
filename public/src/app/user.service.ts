import { Injectable } from '@angular/core';
import { User, Add } from './user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/behaviorsubject';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  loggedIn = new BehaviorSubject({});

  user = new BehaviorSubject({});

  add = new BehaviorSubject({});

  holdUser(user: User) {
    this.loggedIn.next(user);
    console.log(this.loggedIn)
  }

  sessionCheck(callBack){
    this._http.get('/session').map(Response=>Response.json()).subscribe(
      (success) => {
        console.log(success)
        this.holdUser(success)
        if( typeof callBack== 'function'){
          callBack()
          console.log("heelo")
        }
      }
    )
  }


  constructor(private _http: Http) { }
  show(){
    return this._http.get('/')
  }
  register(user: User){
    return this._http.post('/register', user)
  }
  userSub(){
    return this.loggedIn.asObservable()
  }
  login(user: User){
     //this.user.next(this.loggedIn)
    console.log(user)
    return this._http.post('/login', user).map(Response=>Response.json())

  }
  clearUser(){
    this.loggedIn.next({});
    return this._http.get('/logout').subscribe(
      res=> (res.json()),
      err => console.log(err)
    )
  }
  allImg(){
    return this._http.get('imgs').map(Response=>Response.json())
   }

  newImg(add: any){
    return this._http.post('/upload', add).subscribe(
      res=> (res),
      err => console.log(err)
    )
  }

  deleteImg(id){
    return this._http.delete('/img/'+ id).subscribe(
      res=> (res),
      err => console.log(err)
    )
  }



  }


