import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, QueryList,  ViewChild, AfterViewInit,ElementRef, ViewChildren } from '@angular/core';
import { UserRecentActivitiesComponent } from "../user-recent-activities/user-recent-activities.component";
import { UserDatasetsComponent } from "../user-datasets/user-datasets.component";
import { UserSavedDatasetsComponent } from "../user-saved-datasets/user-saved-datasets.component";
import { AppComponent } from "../../app.component";
import { XDSHeaderbarDropMenuItem } from "../../../assets/components/xds-headerbar/xds-headerbar-user-menu-item";
import { HeaderService } from "../../../services/xds-headerbar.service";

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})

export class UserProfilePageComponent implements OnInit {
  extraCreature!: string;
  public headerBarUMItems: XDSHeaderbarDropMenuItem[] = [];
  fn = '';
  ln = '';
  constructor(private AppComponent: AppComponent, private headerService: HeaderService) 
  { 
    AppComponent.UpdateMenuItems();
  }
  


  ngOnInit(){
    this.headerService.setLoggingState(true);
    var tab_content = document.getElementById("tab1c") as HTMLDivElement;
    tab_content.style.display = "block";
    this.fn =  localStorage.getItem('userFirstName') as string;
    this.ln =  localStorage.getItem('userLastName') as string;
  }


  TabItemClicked($event: { target: any; })
  {
    var elements_active = Array.from(document.getElementsByClassName('nav-item xds-active') as HTMLCollectionOf<HTMLElement>)

    for (var i = 0; i < elements_active.length; i++) {
      elements_active[i].setAttribute("class","nav-item");
    }

    var id = $event.target.attributes.id.value
    var x = document.getElementById(id+"m") as HTMLDivElement;
    x.setAttribute("class","nav-item xds-active");
    var tab_content_elements = Array.from(document.getElementsByClassName('tab-content') as HTMLCollectionOf<HTMLElement>)
    for (var i = 0; i < tab_content_elements.length; i++) {
      tab_content_elements[i].style.display = "none"
    }
    var tab_content = document.getElementById(id+"c") as HTMLDivElement;
    tab_content.style.display = "block"

  }

}
