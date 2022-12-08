import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'logout', component: LoginComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
