import { Component, OnInit, Input, Injectable } from '@angular/core';
import { XDSHeaderbarItem } from "../xds-headerbar/xds-headerbar-item";
import { XDSHeaderbarDropMenuItem } from "../xds-headerbar/xds-headerbar-user-menu-item";
import { Router } from "@angular/router";
import { HeaderService } from "../../../services/xds-headerbar.service";

@Injectable({
  providedIn: 'root'
  })


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

  public ChangeLoggingState(isLogged: boolean){
    
    var b = document.getElementById("logB") as HTMLDivElement;
    var bs = document.getElementById("logS") as HTMLDivElement;
    if (!isLogged) {
      
      b.classList.remove("badge-success")
      b.classList.add("badge-danger")
      bs.className = "fas fa-ban"

    } else {
      b.classList.remove("badge-danger")
      b.classList.add("badge-success")
      bs.className = "fas fa-check"
    }
  }
  

  constructor( private router: Router, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.isLogged.subscribe(logged => {
      this.ChangeLoggingState(logged);
    }

    );
    //this.menu.style.display = "none"
    this.x.Name = "Test"
    this.y.Name = "Test2"
    this.x.RouterLink = "login"
    this.headerItems.push(this.x)
    this.headerItems.push(this.y)
    this.x2.Name = "Test2"
    this.y2.Name = "Test22"
    this.x2.RouterLink = "login"
    var  isLogged = localStorage.getItem('isLogged')
    var b = document.getElementById("logB") as HTMLDivElement;
    var bs = document.getElementById("logS") as HTMLDivElement;

    if (isLogged=="false") {
      
      b.classList.remove("badge-success")
      b.classList.add("badge-danger")
      bs.className = "fas fa-ban"

    } else {
      b.classList.remove("badge-danger")
      b.classList.add("badge-success")
      bs.className = "fas fa-check"
    }
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

  DeactivateAll(){
    var all_eles = document.getElementsByClassName("header-item") as HTMLCollectionOf <HTMLElement>;
    for (let index = 0; index < all_eles.length; index++) {
      all_eles[index].classList.remove("active") ;
      
    }
  }

  ActivateHeaderItem(id:string){
    this.DeactivateAll();
    if(id != "main"){
      var main_ele = document.getElementById(id) as HTMLDivElement; 
      main_ele.classList.add("active");
    }
  }

  Scroll($event: { target: any; }){
    this.DeactivateAll();
    var id = $event.target.attributes.id.value
    
    
    var main_ele = document.getElementById(id) as HTMLDivElement; 
    main_ele.classList.add("active");

    var el = document.getElementById(id+"l") as HTMLDivElement; 
    
    //window.scroll(0,el.offsetTop);
    //.scrollIntoView({behavior: 'smooth'});
    window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth',
    });
  
  }
 
}
