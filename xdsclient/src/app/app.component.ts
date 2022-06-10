import { Component} from '@angular/core';
import { XDSHeaderbarDropMenuItem } from "../assets/components/xds-headerbar/xds-headerbar-user-menu-item";
import { XDSHeaderbarItem } from "../assets/components/xds-headerbar/xds-headerbar-item";
import { UserSharedDetails } from "../app/shared/user.details";
import { HeaderService } from "../services/xds-headerbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public headerBarItems: XDSHeaderbarItem[] = [];
  public headerBarUMItems: XDSHeaderbarDropMenuItem[] = [];
  constructor() { 

  }


}
