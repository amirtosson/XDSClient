import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { SignUpPageComponent } from './user/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';

// Assests components
import { XdsHeaderbarComponent } from '../assets/components/xds-headerbar/xds-headerbar.component';
import { XdsFooterComponent } from '../assets/components/xds-footer/xds-footer.component';
import { XdsToolBoxComponent } from '../assets/components/xds-tool-box/xds-tool-box.component';


@NgModule({
  declarations: [
    AppComponent,
    XdsHeaderbarComponent,
    XdsFooterComponent,
    XdsToolBoxComponent,
    HomePageComponent,
    SignUpPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
