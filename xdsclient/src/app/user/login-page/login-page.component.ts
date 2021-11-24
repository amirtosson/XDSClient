import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '../../Models/userModel/user.model';
import { UserDataServerFunctions } from '../../servercommunications/user-data-server-functions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})




export class LoginPageComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {

    var signinBtn = document.getElementById('signin-btn');
    signinBtn?.addEventListener('click', this.SignInUser);
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
    //this.router.navigate(['/home']);

  };

  Nav(){
    
    this.router.navigate(['/home']);
  }
  

  async SignInUser(): Promise<void>{
    var userSentObj = new User();
    userSentObj.name = (<HTMLInputElement>document.getElementById('loginname')).value;
    userSentObj.password = (<HTMLInputElement>document.getElementById('password')).value;   
    var id = await UserDataServerFunctions.getData('/test',userSentObj)
    console.log(id.status)
      // if (id>0) {
      // } else {
      //   window.alert("User or password is not right.");
      // }
 
 

  };





};