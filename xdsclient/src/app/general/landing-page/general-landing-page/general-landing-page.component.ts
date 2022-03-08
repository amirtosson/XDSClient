import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";


@Component({
  selector: 'app-general-landing-page',
  templateUrl: './general-landing-page.component.html',
  styleUrls: ['./general-landing-page.component.css']
})
export class GeneralLandingPageComponent implements OnInit {

  constructor(private AppComponent: AppComponent) {
    this.AppComponent.UpdateMenuItems();
    this.AppComponent.UpdateHeaderItems(true);
   }

  ngOnInit(): void {
  }

  scroll() {
    var el = document.getElementById("projects") as HTMLDivElement; 
    el.scrollIntoView({behavior: 'smooth'});
}

GoToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
}
