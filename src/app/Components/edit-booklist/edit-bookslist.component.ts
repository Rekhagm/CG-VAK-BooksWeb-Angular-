
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { users } from '../model/User';
import { bookslist } from '../model/booklist';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-bookslist',
  templateUrl: './edit-bookslist.component.html',
  styleUrls: ['./edit-bookslist.component.css']
})
export class EditBookslistComponent implements OnInit {


  name= new FormControl('')
    ProductForm=new FormGroup({
   
     id: new FormControl(this.route.snapshot.paramMap.get('id')),
     title: new FormControl(''),
     price: new FormControl(''),
     description: new FormControl(''),
     author:new FormControl(''),
     listPrice:new FormControl(''),
     price50:new FormControl(''),
     price100:new FormControl(''),
     isbn:new FormControl(''),
     categoryid:new FormControl('')
      
   })

   booklist: any;
   message = '';
   productId='';
   ngDropdown = 1;
   submitted=false;


  constructor(private api:ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {debugger
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));

  }


  getBook(id: string | null): void {debugger
   this.api.get(id).subscribe(
    data => {       this.productId = data.id;
      this.ProductForm.controls['title'].setValue(data.title);
      this.ProductForm.controls['price'].setValue(data.price);
      this.ProductForm.controls['description'].setValue(data.description);
      this.ProductForm.controls['isbn'].setValue(data.isbn);
      this.ProductForm.controls['author'].setValue(data.author);
      this.ProductForm.controls['price50'].setValue(data.price50);
      this.ProductForm.controls['price100'].setValue(data.price100);
      this.ProductForm.controls['listPrice'].setValue(data.listPrice);
      this.ProductForm.controls['categotyid'].setValue(data.categotyid);
             },
        (error: any) => {
          console.log(error);
        });
      
  }




  // setAvailableStatus(status: any): void {
  //   const data = {
  //     title: this.booklist.name,
  //     description: this.booklist.description,
  //     author:this.booklist.author,

  //   };

  //   this.api.update(this.booklist.id, data)
  //     .subscribe(
  //       response => {
  //         this.booklist.available = status;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  
  // updateBook(book: bookslist) {
  //   debugger;
  //   this.api.update(this.productId,this.ProductForm.value).subscribe(() => {
  //     this.message = 'Record Updated Successfully';
  //     this.api.getproducts();
  //   });
  // }
  
  updateBook(): void {
    this.api.update(this.productId, this.ProductForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }


  }



  





