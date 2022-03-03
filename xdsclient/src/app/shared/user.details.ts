import { Injectable } from '@angular/core';

 

@Injectable({
  providedIn: 'root'
})
export class UserSharedDetails {
  static loggedInUser = false;
}
