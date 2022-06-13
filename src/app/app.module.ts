import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AddBooksComponent } from './Components/add-books/add-books.component';
import { AddBookslistComponent } from './Components/add-booklist/add-bookslist.component';
import { EditBookslistComponent } from './Components/edit-booklist/edit-bookslist.component';
import { DeleteBookslistComponent } from './Components/delete-booklist/delete-booklist.component';

@NgModule({
  declarations: [
    AppComponent,

    AddBooksComponent,
    AddBookslistComponent,
    EditBookslistComponent,
    DeleteBookslistComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


