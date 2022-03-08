import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './Models/materials.models';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule }from '@swimlane/ngx-charts';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './user/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { UserProfilePageComponent } from './user/user-profile-page/user-profile-page.component';
import { UserRecentActivitiesComponent } from './user/user-recent-activities/user-recent-activities.component';
import { UserDatasetsComponent } from './user/user-datasets/user-datasets.component';
import { UserSavedDatasetsComponent } from './user/user-saved-datasets/user-saved-datasets.component';
import { GeneralLandingPageComponent } from './general/landing-page/general-landing-page/general-landing-page.component';
import { MembersComponent } from './general/members/members.component';
import { EditDatasetDetailsComponent } from './dataset/edit-dataset-details/edit-dataset-details.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';


// Assests components
import { XdsHeaderbarComponent } from '../assets/components/xds-headerbar/xds-headerbar.component';
import { XdsFooterComponent } from '../assets/components/xds-footer/xds-footer.component';
import { XdsToolBoxComponent } from '../assets/components/xds-tool-box/xds-tool-box.component';
import { XdsHeaderSignatureComponent } from '../assets/components/xds-header-signature/xds-header-signature.component';
import { XdsInfoMainBoxComponent } from '../assets/components/xds-info-main-box/xds-info-main-box.component';
import { XdsNewsHighlightsComponent } from '../assets/components/xds-news-highlights/xds-news-highlights.component';
import { XdsFooterSignatureComponent } from '../assets/components/xds-footer-signature/xds-footer-signature.component';
import { XpcsDashboardComponent  } from "../assets/components/dashboaerd-pages/xpcs-dashboard/xpcs-dashboard.component";
import { GisaxsDashboardComponent  } from "../assets/components/dashboaerd-pages/gisaxs-dashboard/gisaxs-dashboard.component";
import { GeneralInfoDashboardComponent  } from "../assets/components/dashboaerd-pages/general-info-dashboard/general-info-dashboard.component";
import { AddNewDatasetDashboardComponent } from "../assets/components/dashboaerd-pages/add-new-dataset-dashboard/add-new-dataset-dashboard.component";
import { AddNewFunctionDashboardComponent } from "../assets/components/dashboaerd-pages/add-new-function-dashboard/add-new-function-dashboard.component";
import { AddNewPublicationDashboardComponent } from "../assets/components/dashboaerd-pages/add-new-publication-dashboard/add-new-publication-dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    XdsHeaderbarComponent,
    XdsFooterComponent,
    XdsToolBoxComponent,
    SignUpPageComponent,
    XdsHeaderSignatureComponent,
    XdsInfoMainBoxComponent,
    XdsNewsHighlightsComponent,
    XdsFooterSignatureComponent,
    LoginPageComponent,
    UserProfilePageComponent,
    UserRecentActivitiesComponent,
    UserDatasetsComponent,
    UserSavedDatasetsComponent,
    GeneralLandingPageComponent,
    MembersComponent,
    EditDatasetDetailsComponent,
    UserDashboardComponent,
    XpcsDashboardComponent,
    GisaxsDashboardComponent,
    GeneralInfoDashboardComponent,
    AddNewDatasetDashboardComponent,
    AddNewFunctionDashboardComponent,
    AddNewPublicationDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatTabsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
