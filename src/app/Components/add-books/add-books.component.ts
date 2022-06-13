import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

    
   bookslist:any=[];
    books:any ={};

    Activateaddedit:boolean=false;
     constructor(private api:ApiService) { 
        
     }

    ngOnInit() {        
            this.api.getproducts().subscribe((data)=>{
                this.books = data;
              });
              }

    addclick(){
    this.books={
      Id:0,
      Name:""
    }
     this.Activateaddedit=true;
    }

    }

