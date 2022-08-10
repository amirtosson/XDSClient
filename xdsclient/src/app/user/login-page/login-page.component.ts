import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserDataServerFunctions} from "../../../app/servercommunications/user-data-server-functions";
import { XdsHeaderbarComponent } from "../../../assets/components/xds-headerbar/xds-headerbar.component";
import { HeaderService } from "../../../services/xds-headerbar.service";
import { User } from "../../objects/user-item";
import { LoggedUserService } from "../user-services/logged-user.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loggedUser= new User();
  constructor(private router: Router, private headerService: HeaderService,
    public lUS:LoggedUserService) { }

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
          this.loggedUser.UserMap(res.user, res.user_token) 
          sessionStorage.setItem('isLogged', "true");
          sessionStorage.setItem('userID', res.user.id);
          sessionStorage.setItem('user_token', res.user_token)
          this.router.navigateByUrl('/userprofile');
        } 
        else 
        {
          console.log("Not found")
        }
        
      }
    )
    .then(()=>{
      this.lUS.SetLoggedUser(this.loggedUser)
    }
    )
  }
}
