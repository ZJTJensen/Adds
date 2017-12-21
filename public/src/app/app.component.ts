import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private _us:UserService,
    private _router: Router
  
  ) { }
  user = null;
  err;
  logins = new User()
  loginerrs;


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
  login(logins){
    this._us.login(logins).subscribe(
      (success) => {
        console.log(success)
        this._us.holdUser(success)
        this._router.navigate(['success'])
        this.logins = new User()
      },
      (err) => {
        return this.loginerrs = true
      }
    )
  }
  logout(){
    this._us.clearUser();
    this.user= null;


    return this._router.navigate(['login']);
  }
  ngOnInit(){
    this.create()
    
    this._us.sessionCheck(function(){})
  }
}
