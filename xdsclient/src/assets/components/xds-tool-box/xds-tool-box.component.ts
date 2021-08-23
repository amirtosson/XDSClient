import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-xds-tool-box',
  templateUrl: './xds-tool-box.component.html',
  styleUrls: ['./xds-tool-box.component.css']
})
export class XdsToolBoxComponent implements OnInit {

  @Output() xdsActiveButton = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  WelcomeIsClicked(){
    this.xdsActiveButton.emit(1);
  }

  SignInUpIsClicked(){
    this.xdsActiveButton.emit(2);
  }
  UploadIsClicked(){
    this.xdsActiveButton.emit(3);
  }
  DownloadIsClicked(){
    this.xdsActiveButton.emit(4);
  }
  AnalyzeIsClicked(){
    this.xdsActiveButton.emit(5);
  }
  KnowHowIsClicked(){
    this.xdsActiveButton.emit(6);
  }

}
