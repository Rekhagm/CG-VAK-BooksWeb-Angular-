import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductlistComponent } from '../product/productlist/productlist.component';
import { ProductComponent } from '../product/product.component';
import { users } from '../model/User';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  @Output() addproduct=new EventEmitter<users>()
  user:users={
    id:7,
    name:{
      firstname:'',
      lastname:'',
      email:''
    },
    username:'',
    password:''
   
  }
  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(forms:any)
  {
    console.log(forms.value)
    this.user.name.firstname=forms.valid.firstname;
    this.user.name.lastname=forms.value.lastname;
    this.user.name.email=forms.value.email;

    this.addproduct.emit(this.user)
  }

  submitted=false;
  onsubmit(userForm:any)
  {
    this.submitted=true;
    console.log(userForm.value)
  }
}
