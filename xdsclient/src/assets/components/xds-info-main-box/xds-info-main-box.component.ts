import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xds-info-main-box',
  templateUrl: './xds-info-main-box.component.html',
  styleUrls: ['./xds-info-main-box.component.css']
})
export class XdsInfoMainBoxComponent implements OnInit {
  buttonId = 1
  constructor() { }

  ngOnInit(): void {
    this.HideAll();
    this.ShowMenu(this.buttonId);
  }

  HideAll(){
    var i, tabcontent, tablinks;
    tabcontent = Array.from(document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>)

    //tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  }

  ShowMenu(a:number){
    var t = document.getElementById(a.toString()) as HTMLLIElement;
    t.style.display = "block";
  }
  
  ToolBoxIsClicked(){
   this.HideAll();
    this.ShowMenu(this.buttonId);
  } 
}
