import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './user/home-page/home-page.component';
import { SignUpPageComponent } from './user/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';


export const appRoutes: Routes = [
  {
      path: 'signup', component: SignUpPageComponent
     // children: [{path: '', component: SignUpComponent}]
  },

  {
      path: 'login', component: LoginPageComponent
      //children: [{path: '', component: SignInComponent}]
  },

  {
      path: 'home', component: HomePageComponent
  },
  {
      path: '', redirectTo: '/home', pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
