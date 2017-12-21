import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {UserService} from './../user.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _us:UserService,
    private _router: Router
  ) { }

  user = new User()
  
  
  err;

  create(user) {
    this._us.register(user).subscribe(
        (success) => {success}, //Change to show a succues mesage
        (err) => {
          this.err = JSON.parse(err._body)
          console.log(err)
        }
    )
    
    this.user = new User() //move to success
    this._router.navigate(['login']);//move to success
    
  }
  

  ngOnInit() {
  }
}