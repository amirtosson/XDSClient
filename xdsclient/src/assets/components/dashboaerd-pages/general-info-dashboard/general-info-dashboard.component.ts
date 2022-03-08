import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info-dashboard',
  templateUrl: './general-info-dashboard.component.html',
  styleUrls: ['./general-info-dashboard.component.css']
})
export class GeneralInfoDashboardComponent implements OnInit {

  constructor() { }

  datasets = [
    { name: "XPCS", value: 10 },
    { name: "GISAX", value: 5},
    { name: "Others", value: 1 }
  ];

  publications = [
    { name: "XPCS", value: 20 },
    { name: "GISAX", value: 15},
    { name: "Others", value: 65 }
  ];
  ngOnInit(): void {
  }

}
