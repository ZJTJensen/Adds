import { Component, OnInit } from '@angular/core';
import {User, Add} from '../user';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-new-add',
  templateUrl: './new-add.component.html',
  styleUrls: ['./new-add.component.css']
})
export class NewAddComponent implements OnInit {
  
  constructor(
    private _us: UserService,
    private _router: Router
  ) { }
  user = null;
  add = new Add;
  img: any;
  ngOnInit() {
    
    this._us.userSub().subscribe(
      (user) => 
      {this.user = user
      }
    )

  }
  onUploadFinished($event){
    this.img = $event
    this.img['company'] = this.user.company
    
  }
  
    uploadAdd(data){
      var company = this.user.company
      this.img['type']=data.type
      console.log(this.img)
      this._us.newImg(this.img)
      this.add = new Add
    }
}
