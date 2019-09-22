import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }