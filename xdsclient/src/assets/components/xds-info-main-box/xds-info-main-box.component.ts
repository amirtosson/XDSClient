import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xds-info-main-box',
  templateUrl: './xds-info-main-box.component.html',
  styleUrls: ['./xds-info-main-box.component.css']
})
export class XdsInfoMainBoxComponent implements OnInit {
  buttonId = 0
  constructor() { }

  ngOnInit(): void {
  }
  
  ToolBoxIsClicked(){
    var i, tabcontent, tablinks;
    tabcontent = Array.from(document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>)

    //tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    if(this.buttonId===1)
    {
      var t = document.getElementById("Tokyo");
      
    }
    console.log(this.buttonId)
    console.log("this.buttonId")
  } 

  
}
