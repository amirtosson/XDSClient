import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../../services/xds-headerbar.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private headerService: HeaderService) { }


  ngOnInit(): void {
    this.headerService.setLoggingState(true);
  }
  NavItemClicked($event: { target: any; }){

    var id = $event.target.attributes.id
    if (id === undefined)return 
    var elesActive = document.getElementsByClassName("active") as HTMLCollectionOf<HTMLDivElement>;
    elesActive[0].classList.remove("active");
    var elActive = document.getElementById(id.value) as HTMLDivElement;
    elActive.classList.add("active");

    var eles = document.getElementsByClassName("is-shown") as HTMLCollectionOf<HTMLDivElement>;
    if (eles[0] === null)return 
    eles[0].classList.add("is-hidden");
    eles[0].classList.remove("is-shown");
 
    var el = document.getElementById(id.value+"-main") as HTMLDivElement;
    if (el === null)return 
    el.classList.add("is-shown");
    el.classList.remove("is-hidden");   
  }
}
