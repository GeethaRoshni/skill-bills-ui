import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './common/login/login.component';
import { ProductComponent } from './product/product.component';
import { ListInvoiceComponent } from './invoice/list-invoice/list-invoice.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'invoice', component: ListInvoiceComponent },
  { path: 'invoice/add', component: AddInvoiceComponent },
  { path: 'logout', component: LoginComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
