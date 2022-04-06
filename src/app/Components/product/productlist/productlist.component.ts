import { Component, Input, OnInit } from '@angular/core';
import { product } from '../../model/product';
import { users } from '../../model/User';
import { ProductComponent } from '../product.component';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

 @Input() product:any ={}
 
  
 public counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  showDesc=false;
  showproductdetails(){
    this.showDesc=!this.showDesc
  }

}
