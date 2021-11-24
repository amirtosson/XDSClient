import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-xds-tool-box',
  templateUrl: './xds-tool-box.component.html',
  styleUrls: ['./xds-tool-box.component.css']
})
export class XdsToolBoxComponent implements OnInit {

  @Output() xdsActiveButton = new EventEmitter<number>();
  constructor() { }
  buttonID = 1;
  ngOnInit(): void {
    this.DeactivateAll();
    this.ActivateButton();
  }

  DeactivateAll(){
    var i, tabcontent, tablinks;
    tabcontent = Array.from(document.getElementsByClassName('active') as HTMLCollectionOf<HTMLElement>)
    if(tabcontent.length > 0){
      tabcontent[0].classList.remove("active");
    }
  }

  ActivateButton(){
    var id = this.buttonID.toString() + "a";
    var t = document.getElementById(id);
    t?.classList.add("active");
  }

  WelcomeIsClicked(){
    this.buttonID = 1;
    this.xdsActiveButton.emit(this.buttonID);
    this.DeactivateAll();
    this.ActivateButton();
  }

  SignInUpIsClicked(){
    this.buttonID = 2;
    this.xdsActiveButton.emit(this.buttonID);
    this.DeactivateAll();
    this.ActivateButton();
  }
  UploadIsClicked(){
    this.buttonID = 3;
    this.xdsActiveButton.emit(this.buttonID);
    this.DeactivateAll();
    this.ActivateButton();
  }
  DownloadIsClicked(){
    this.buttonID = 4;
    this.xdsActiveButton.emit(this.buttonID);
    this.DeactivateAll();
    this.ActivateButton();
  }
  AnalyzeIsClicked(){
    this.buttonID = 5;
    this.xdsActiveButton.emit(this.buttonID);
    this.DeactivateAll();
    this.ActivateButton();
  }
  KnowHowIsClicked(){
    this.buttonID = 6;
    this.xdsActiveButton.emit(this.buttonID);
    this.DeactivateAll();
    this.ActivateButton();
  }

}
