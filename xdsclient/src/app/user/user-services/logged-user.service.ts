import { Injectable } from '@angular/core';
import { json } from 'd3';
import { User } from "../../objects/user-item";

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  public loggedUser = new User()
  constructor() { }
  SetLoggedUser(user:User){
    sessionStorage.setItem("userData", JSON.stringify(user));
  }

  GetLoggedUser(){
   return JSON.parse(sessionStorage.getItem("userData")!);
  }


}
