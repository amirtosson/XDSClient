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
    this.HideAll();
    this.HideAllMain();
  }
  
  ToolBoxIsClicked(){
    this.HideAll();
    this.HideAllMain();
    if(this.buttonId===1)
    {
      var t = document.getElementById("welcome") as HTMLElement;
      t.style.display = "block";
      t = document.getElementById("welcomemain") as HTMLElement;
      t.style.display = "block";
      
    }
    else if(this.buttonId===2){
      var t = document.getElementById("signinup") as HTMLElement;
      t.style.display = "block";
      t = document.getElementById("signinmain") as HTMLElement;
      t.style.display = "block";
    }
    else if(this.buttonId===3){
      var t = document.getElementById("upload") as HTMLElement;
      t.style.display = "block";
      t = document.getElementById("uploadmain") as HTMLElement;
      t.style.display = "block";
    }
    else if(this.buttonId===4){
      var t = document.getElementById("download") as HTMLElement;
      t.style.display = "block";
      t = document.getElementById("downloadmain") as HTMLElement;
      t.style.display = "block";
    }
    else if(this.buttonId===5){
      var t = document.getElementById("analyze") as HTMLElement;
      t.style.display = "block";
      t = document.getElementById("analyzemain") as HTMLElement;
      t.style.display = "block";
    }
    else if(this.buttonId===6){
      var t = document.getElementById("knowhow") as HTMLElement;
      t.style.display = "block";
      t = document.getElementById("knowhowmain") as HTMLElement;
      t.style.display = "block";
    }


  } 

  HideAll(){
    var i, tabcontent, tablinks;
    tabcontent = Array.from(document.getElementsByClassName('tabcontentsub') as HTMLCollectionOf<HTMLElement>)

    //tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  }

  HideAllMain(){
    var i, tabcontent, tablinks;
    tabcontent = Array.from(document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>)

    //tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  }


  SignInClicked(){
    this.HideAllMain();
    var t = document.getElementById("signinmain") as HTMLElement;
    t.style.display = "block";

  }

  SignUpClicked(){

    this.HideAllMain();
    var t = document.getElementById("signupmain") as HTMLElement;
    t.style.display = "block";
  }

}
