import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';


const routes: Routes = 
[
  {
    path:"signup",component:SignupComponentComponent
  },
  {
    path:"login",component:LoginComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
