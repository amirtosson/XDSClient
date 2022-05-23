import { Component} from '@angular/core';
import { XDSHeaderbarDropMenuItem } from "../assets/components/xds-headerbar/xds-headerbar-user-menu-item";
import { XDSHeaderbarItem } from "../assets/components/xds-headerbar/xds-headerbar-item";
import { UserSharedDetails } from "../app/shared/user.details";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public headerBarItems: XDSHeaderbarItem[] = [];
  public headerBarUMItems: XDSHeaderbarDropMenuItem[] = [];

  title = 'xdsclient';
  static IsUserSigned = false;
  constructor() { 
    //localStorage.setItem('isLogged', "false");
  }

  UpdateMenuItems()
  {
    var isLogged =  localStorage.getItem('isLogged')
    if (isLogged === "true") {
      this.headerBarUMItems = [];
    var newItem = new XDSHeaderbarDropMenuItem;
    newItem.Name = 'Your profile';
    newItem.RouterLink = '/userprofile';
    newItem.Button = 'fa fa-user';
    this.headerBarUMItems.push(newItem);
    var newItem = new XDSHeaderbarDropMenuItem;
    newItem.Name = 'Sign-out';
    newItem.RouterLink = '/login';
    newItem.Button = "fa fa-sign-out";
    this.headerBarUMItems.push(newItem);
    } else {
      this.headerBarUMItems = [];
      var newItem = new XDSHeaderbarDropMenuItem;
      newItem.Name = 'Sign-In';
      newItem.RouterLink = '/login';
      newItem.Button = "fa fa-sign-in";
      this.headerBarUMItems.push(newItem);
    }
   
  }

  UpdateHeaderItems(isLanding:boolean){
    var el = document.getElementById("nav-landing") as HTMLDivElement;
    var el2 = document.getElementById("nav-other") as HTMLDivElement;
    if (isLanding) {
      el2.style.display = "none"
      el.style.display = "block"
    } else {
      el.style.display = "none"
      el2.style.display = "block"
    }
  }
}
