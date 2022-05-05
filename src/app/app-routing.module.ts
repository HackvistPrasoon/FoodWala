import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooddashComponent } from './fooddash/fooddash.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard',component:FooddashComponent
  },
  {
    path:'signup',component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
