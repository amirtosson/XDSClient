import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { SignUpPageComponent } from './user/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { UserProfilePageComponent} from "./user/user-profile-page/user-profile-page.component"
import { GeneralLandingPageComponent } from "./general/landing-page/general-landing-page/general-landing-page.component";
import { EditDatasetDetailsComponent  } from "./dataset/edit-dataset-details/edit-dataset-details.component";
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { OnlineAnalysisLandingPageComponent } from "./online-data-analysis/online-analysis-landing-page/online-analysis-landing-page.component";
import { ELearningLandingPageComponent } from "./e-learning/e-learning-landing-page/e-learning-landing-page.component";
import { OnlineSoftwarePageComponent } from "../assets/components/online-software-page/online-software-page.component";
import { OneDimCorrFnAutoencoderComponent } from "./online-software/xpcs/one-dim-corr-fn-autoencoder/one-dim-corr-fn-autoencoder.component";
import { RawDataManipulationComponent } from "./online-software/xpcs/raw-data-manipulation/raw-data-manipulation.component";

export const appRoutes: Routes = [
  {
      path: 'signup', component: SignUpPageComponent
     // children: [{path: '', component: SignUpComponent}]
  },

  {
    path: 'onlinesoftware/xpcs/:doi', component:(() => {
      const model_name = sessionStorage.getItem("softwareInstance")
      if (model_name === "1D Auto Encoder") {
        return OneDimCorrFnAutoencoderComponent
      } else if(model_name ==="Raw Data Manipulation") {
        return RawDataManipulationComponent
      }
      else{
        return GeneralLandingPageComponent;
      }})()
      , canActivate:[AuthGuardGuard]
   // children: [{path: '', component: SignUpComponent}]
  },
  {
      path: 'login', component: LoginPageComponent
      //children: [{path: 'login', component: HomePageComponent}]
  },

  {
      path: 'userdashboard', component: UserDashboardComponent, canActivate:[AuthGuardGuard]
  },
  {
    path: 'home', component: GeneralLandingPageComponent
  },
  {
      path: '', redirectTo: '/home', pathMatch: 'full',
  },

  {
      path: 'userprofile', component: UserProfilePageComponent, canActivate:[AuthGuardGuard]
     
  },
  {
    path: 'editdataset', component: EditDatasetDetailsComponent, canActivate:[AuthGuardGuard]
   
  },
  {
    path: 'onlineanalysis', component: OnlineAnalysisLandingPageComponent
   
  },
  {
    path: 'elearning', component: ELearningLandingPageComponent
   
  }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
