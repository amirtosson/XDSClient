import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, QueryList,  ViewChild, AfterViewInit,ElementRef, ViewChildren } from '@angular/core';
import { UserRecentActivitiesComponent } from "../user-recent-activities/user-recent-activities.component";
import { UserDatasetsComponent } from "../user-datasets/user-datasets.component";
import { UserSavedDatasetsComponent } from "../user-saved-datasets/user-saved-datasets.component";


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})

export class UserProfilePageComponent implements AfterViewInit {
  extraCreature!: string;
  constructor() { }
  // @ViewChild(UserDatasetsComponent) private datasets = {} as UserDatasetsComponent;
  // @ViewChild(UserRecentActivitiesComponent) private recentActivities = {} as UserRecentActivitiesComponent;
  // @ViewChild(UserSavedDatasetsComponent) private savedDatastes = {} as UserSavedDatasetsComponent;

  @ViewChildren(UserDatasetsComponent)datasets!:QueryList<UserDatasetsComponent>;
  @ViewChildren(UserRecentActivitiesComponent)recentActivities!:QueryList<UserRecentActivitiesComponent>;
  @ViewChildren(UserSavedDatasetsComponent)savedDatastes!:QueryList<UserSavedDatasetsComponent>;

  RecentActivities($event: { target: any; })
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

  ngAfterViewInit() {
    var tab_content = document.getElementById("tab1c") as HTMLDivElement;
    tab_content.style.display = "block"
  }

}
