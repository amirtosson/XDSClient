import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../app.component";
import { XDSHeaderbarDropMenuItem } from "../../../assets/components/xds-headerbar/xds-headerbar-user-menu-item";
import { XDSHeaderbarItem } from "../../../assets/components/xds-headerbar/xds-headerbar-item";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public headerBarUMItems: XDSHeaderbarDropMenuItem[] = [];
  constructor(private AppComponent: AppComponent) 
  { 
    this.AppComponent.UpdateMenuItems();
  }

  ngOnInit(): void {
  }
  
}
