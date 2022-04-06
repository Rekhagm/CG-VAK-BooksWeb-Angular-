import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { CounterComponent } from '../counter.component';



@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.css']
})
export class CounterBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() counter:any;
  @Output() countchanged:EventEmitter<number>=new EventEmitter();

  disableBtn=true;

  incrementCounter(){
    this.counter++;
    this.countchanged.emit(this.counter)
    this.disableBtn=false;
  }

  decrementCounter(){
    this.counter--;
    this.countchanged.emit(this.counter);
    if(this.counter==0){
      this.disableBtn=true;
    }
    
  }

}
