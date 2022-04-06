import { Component, Input, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { UserComponent } from '../user.component';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

 @Input() user:any ={}
  
  constructor() {}

  ngOnInit(): void {

  }

  
  showDesc=false;
  showuserdetails(){
    this.showDesc=!this.showDesc
  }
}