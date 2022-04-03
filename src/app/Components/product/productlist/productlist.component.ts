import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product.component';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

 @Input() product:any ={}
  
  constructor() { }

  ngOnInit(): void {
  }

  showDesc=false;
  showproductdetails(){
    this.showDesc=!this.showDesc
  }
}
