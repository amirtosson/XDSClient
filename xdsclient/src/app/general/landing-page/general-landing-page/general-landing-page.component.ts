import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { HeaderService } from "../../../../services/xds-headerbar.service";
import { AppComponent } from "../../../app.component";

@Component({
  selector: 'app-general-landing-page',
  templateUrl: './general-landing-page.component.html',
  styleUrls: ['./general-landing-page.component.css']
})


export class GeneralLandingPageComponent implements OnInit {
  ;
  constructor(private AppComponent: AppComponent,private headerService: HeaderService) {
    this.headerService.setLoggingState(true)
    this.headerService.setHeaderBarItems(true)
   }

  ngOnInit(): void {
  }

  scroll() {
      var el = document.getElementById("projects") as HTMLDivElement; 
      el.scrollIntoView({behavior: 'smooth'});
  }

  DeactivateAll(){
    var all_eles = document.getElementsByClassName("header-item") as HTMLCollectionOf <HTMLElement>;
    for (let index = 0; index < all_eles.length; index++) {
      all_eles[index].classList.remove("active") ;
      
    }
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: { target: any; }) {
    const topOffset =  document.documentElement.scrollTop; 
    var eles = document.getElementsByTagName("section") as HTMLCollectionOf <HTMLElement>;
   for (let index = 0; index < eles.length; index++) {
    
    const elTopOffset =  eles[index].getBoundingClientRect().top;
    if (elTopOffset >-200 && elTopOffset< 500) {
      this.DeactivateAll();
      var el = document.getElementById(eles[index].id.replace("l", "")) as HTMLDivElement; 
      el.classList.add("active")
  }
    
   }


  }

  GoToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
