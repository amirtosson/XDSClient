import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserDataServerFunctions} from "../../../app/servercommunications/user-data-server-functions";
import { UserSharedDetails } from "../../shared/user.details";
import { XdsHeaderbarComponent } from "../../../assets/components/xds-headerbar/xds-headerbar.component";
import { HeaderService } from "../../../services/xds-headerbar.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { }

  ngOnInit(): void 
  {
    sessionStorage.clear()
    this.headerService.setLoggingState(false);
  }

  onSignIn(){
    var userName = document.getElementById("username-input") as HTMLInputElement;
    var userPassword = document.getElementById("userpwd-input") as HTMLInputElement;
    UserDataServerFunctions.LoginUser(userName.value,userPassword.value)
    .then
    (
      res => 
      {
        if (res.status == 200) {
          sessionStorage.setItem('isLogged', "true");
          sessionStorage.setItem('userID', res.user_id);
          sessionStorage.setItem('userFirstName', res.first_name);
          sessionStorage.setItem('userLastName', res.last_name);
          sessionStorage.setItem('user_token', res.user_token)
          this.router.navigateByUrl('/userprofile');
        } 
        else 
        {
          console.log("Not found")
        }
        
      }
    );
  }
}
