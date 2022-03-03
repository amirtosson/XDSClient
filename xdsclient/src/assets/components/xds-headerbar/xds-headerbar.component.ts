import { Component, OnInit, Input } from '@angular/core';
import { XDSHeaderbarItem } from "../xds-headerbar/xds-headerbar-item";
import { XDSHeaderbarDropMenuItem } from "../xds-headerbar/xds-headerbar-user-menu-item";

@Component({
  selector: 'app-xds-headerbar',
  templateUrl: './xds-headerbar.component.html',
  styleUrls: ['./xds-headerbar.component.css']
})
export class XdsHeaderbarComponent implements OnInit {

  x = new XDSHeaderbarItem();
  y= new XDSHeaderbarItem();
  x2 = new XDSHeaderbarDropMenuItem();
  y2= new XDSHeaderbarDropMenuItem();

  @Input()
  public headerItems: XDSHeaderbarItem[] = [];
  
  @Input()
  public headerUMItems: XDSHeaderbarDropMenuItem[] = [];

  

  constructor() { }

  ngOnInit(): void {
    //this.menu.style.display = "none"
    this.x.Name = "Test"
    this.y.Name = "Test2"
    this.x.RouterLink = "login"
    this.headerItems.push(this.x)
    this.headerItems.push(this.y)
    this.x2.Name = "Test2"
    this.y2.Name = "Test22"
    this.x2.RouterLink = "login"
    //this.headerUMItems.push(this.x2)
    //this.headerUMItems.push(this.y2)
  }

  OpenUserMenu(){
    var menu = document.getElementById("userMenuContents") as HTMLDivElement;
    if (menu.style.display == 'none') {
      menu.style.display = "block"
    } else {
      menu.style.display = "none"
    }
    
  }
}
