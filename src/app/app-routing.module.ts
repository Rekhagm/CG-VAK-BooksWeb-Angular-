import { NgModule } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute,ParamMap,Params } from '@angular/router';
import { AddBooksComponent } from './Components/add-books/add-books.component';
import { AddBookslistComponent } from './Components/add-booklist/add-bookslist.component';
import { EditBookslistComponent } from './Components/edit-booklist/edit-bookslist.component';
import { DeleteBookslistComponent } from './Components/delete-booklist/delete-booklist.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"books",component:AddBooksComponent},
 {path:"addbooks",component:AddBookslistComponent},
 {path:"editbooks/:id",component:EditBookslistComponent},
 {path:"deletebooks/:id",component:DeleteBookslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
