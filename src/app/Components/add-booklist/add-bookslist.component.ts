
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { bookslist } from '../model/booklist';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-bookslist',
  templateUrl: './add-bookslist.component.html',
  styleUrls: ['./add-bookslist.component.css']
})
export class AddBookslistComponent implements OnInit {

booklist :bookslist={
    id:12,
    title:'',
    ISBN:'',
    description:'',
    author:'',
    price:0,
    listPrice:0,
    price50:0,
    price100:0,
    categoryid:0
}
  
 name= new FormControl('')
 ProductForm=new FormGroup({

  id: new FormControl(''),
  title: new FormControl(''),
  price: new FormControl(''),
  description: new FormControl(''),
  author:new FormControl(''),
  listPrice:new FormControl(''),
  price50:new FormControl(''),
  price100:new FormControl(''),
  ISBN:new FormControl(''),
  categoryid:new FormControl('')

})
  constructor(private api:ApiService, private formBuilder: FormBuilder , private router: Router) { }


  ngOnInit(): void {
  }

  submitted=false;

  submitHandler(): void {
    const data = {
       title: this.booklist.title,
      description: this.booklist.description,
      author:this.booklist.author,
      price:this.booklist.price,
      listPrice:this.booklist.listPrice,
      price50:this.booklist.price50,
      price100:this.booklist.price100,
      ISBN:this.booklist.ISBN,
      categoryid:this.booklist.categoryid
    };
    this.api.create(data)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
      
  }
}





















// //   bookslist:any=[];
// //   val:any;
// //     constructor(private api:ApiService) { 
       
// //     }


// //     ngOnInit() {debugger

// //       }
// //     }



    
     




// // // onSubmit(userForm:any){

// // //   this.http.post('https://localhost:7022/api/Product',userForm).subscribe((result)=>{
// // //     console.log("result",result)
// // //   })
      
// //     //   submitHandler(){
// //     //     console.log(this.ProductForm.value);
// //     //   }
      
// //     //   submitted=false;
// //     //   onsubmit(ProductForm:any)
// //     //   {
// //     //     this.submitted=true;
// //     //     console.log(ProductForm.value)
// //     //   }

// //       // submit(value: any) {debugger
// //       //   let body = {
// //       //     id: value.id,
// //       //     title: value.title,
// //       //     description : value.description,
// //       //     author:value.author,
// //       //     price:value.price
// //       //   }
    
// //       //   this.api.postData(body)
// //       //     .subscribe(response => {
// //       //       console.log(response)
// //       //     })
      
    
  
