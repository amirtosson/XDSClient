import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserDataServerFunctions} from "../../../app/servercommunications/user-data-server-functions";
import { UserSharedDetails } from "../../shared/user.details";



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void 
  {
    localStorage.setItem('isLogged', "false");
    localStorage.setItem('userID', "0");
  }

  onSignIn(){
    var userName = document.getElementById("username-input") as HTMLInputElement;
    var userPassword = document.getElementById("userpwd-input") as HTMLInputElement;
    console.log(userName.value)

    UserDataServerFunctions.LoginUser(userName.value,userPassword.value)
    .then
    (
      res => 
      {
        if (res.status == 200) {
          localStorage.setItem('isLogged', "true");
          localStorage.setItem('userID', res.user_id);
          localStorage.setItem('userFirstName', res.first_name);
          localStorage.setItem('userLastName', res.last_name);
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
