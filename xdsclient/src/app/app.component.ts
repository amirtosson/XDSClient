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
  constructor() { }

  UpdateMenuItems()
  {
    console.log(UserSharedDetails.loggedInUser)
    if (UserSharedDetails.loggedInUser) {
      this.headerBarUMItems = [];
    var newItem = new XDSHeaderbarDropMenuItem;
    newItem.Name = 'Your profile';
    newItem.RouterLink = '#';
    newItem.Button = 'fa fa-user';
    this.headerBarUMItems.push(newItem);
    var newItem = new XDSHeaderbarDropMenuItem;
    newItem.Name = 'Sign-out';
    newItem.RouterLink = '#';
    newItem.Button = 'fa fa-sign-out';
    this.headerBarUMItems.push(newItem);
    } else {
      this.headerBarUMItems = [];
      var newItem = new XDSHeaderbarDropMenuItem;
      newItem.Name = 'Sign-In';
      newItem.RouterLink = 'login';
      newItem.Button = 'fa fa-sign-in';
      this.headerBarUMItems.push(newItem);
    }
   
  }
}
