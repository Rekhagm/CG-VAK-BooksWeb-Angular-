import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter=0;
 
  constructor() { }

  ngOnInit(): void {
  }

 
}
function output() {
  throw new Error('Function not implemented.');
}

