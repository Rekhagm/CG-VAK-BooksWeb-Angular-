import { Component, Input, OnInit } from '@angular/core';
import { UserComponent } from '../user.component';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 @Input() user:any ={}
  
  constructor() { }

  ngOnInit(): void {
  }

  showDesc=false;
  showuserdetails(){
    this.showDesc=!this.showDesc
  }
}