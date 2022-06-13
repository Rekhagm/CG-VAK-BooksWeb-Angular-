
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { users } from '../model/User';
import { bookslist } from '../model/booklist';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-bookslist',
  templateUrl: './delete-bookslist.component.html',
  styleUrls: ['./delete-bookslist.component.css']
})
export class DeleteBookslistComponent implements OnInit {


  name= new FormControl('')
    ProductForm=new FormGroup({
   
     id: new FormControl(1),
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


  deleteBook(): void {
    this.api.delete(this.productId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/books']);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

  }



  





