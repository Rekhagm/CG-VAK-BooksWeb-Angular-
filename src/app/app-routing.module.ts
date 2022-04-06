import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { UserComponent } from './Components/user/user.component';
import { CounterComponent } from './Components/counter/counter.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"angular",component:ProductComponent},
  {path:"user",component:UserComponent},
  {path:"counter",component:CounterComponent},
  {path:"addproduct",component:AddProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
