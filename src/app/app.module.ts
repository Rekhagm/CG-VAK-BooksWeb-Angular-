import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductlistComponent } from './Components/product/productlist/productlist.component';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/user/users/users.component';
import { CounterBtnComponent } from './Components/counter/counter-btn/counter-btn.component';
import { CounterComponent } from './Components/counter/counter.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductlistComponent,
    UserComponent,
    UsersComponent,
    CounterComponent,
    CounterBtnComponent,
    AddProductsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
