import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-dataset-details',
  templateUrl: './edit-dataset-details.component.html',
  styleUrls: ['./edit-dataset-details.component.css']
})
export class EditDatasetDetailsComponent implements OnInit {
  static datasetName = "";
  constructor() { }

  ngOnInit(): void {
    console.log(EditDatasetDetailsComponent.datasetName)
  }

}
