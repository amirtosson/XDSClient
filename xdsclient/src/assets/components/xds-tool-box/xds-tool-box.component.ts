import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xds-tool-box',
  templateUrl: './xds-tool-box.component.html',
  styleUrls: ['./xds-tool-box.component.css']
})
export class XdsToolBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cc(){
    console.log("!!!");
  }

}
