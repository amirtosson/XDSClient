import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './user/home-page/home-page.component';
import { SignUpPageComponent } from './user/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import {UserProfilePageComponent} from "./user/user-profile-page/user-profile-page.component"
import { GeneralLandingPageComponent } from "./general/landing-page/general-landing-page/general-landing-page.component";


export const appRoutes: Routes = [
  {
      path: 'signup', component: SignUpPageComponent
     // children: [{path: '', component: SignUpComponent}]
  },

  {
      path: 'login', component: LoginPageComponent
      //children: [{path: 'login', component: HomePageComponent}]
  },

  {
      path: 'userdashboard', component: HomePageComponent
  },
  {
    path: 'home', component: GeneralLandingPageComponent
  },
  {
      path: '', redirectTo: '/home', pathMatch: 'full',
  },

  {
      path: 'userprofile', component: UserProfilePageComponent,
     
  }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
