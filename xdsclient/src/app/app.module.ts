import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './Models/materials.models';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { XdsHeaderSignatureComponent } from '../assets/components/xds-header-signature/xds-header-signature.component';
import { XdsInfoMainBoxComponent } from '../assets/components/xds-info-main-box/xds-info-main-box.component';
import { XdsNewsHighlightsComponent } from '../assets/components/xds-news-highlights/xds-news-highlights.component';
import { XdsFooterSignatureComponent } from '../assets/components/xds-footer-signature/xds-footer-signature.component';




@NgModule({
  declarations: [
    AppComponent,
    XdsHeaderbarComponent,
    XdsFooterComponent,
    XdsToolBoxComponent,
    HomePageComponent,
    SignUpPageComponent,
    XdsHeaderSignatureComponent,
    XdsInfoMainBoxComponent,
    XdsNewsHighlightsComponent,
    XdsFooterSignatureComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
