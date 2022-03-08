import { Component, OnInit } from '@angular/core';
import { UserDataServerFunctions } from "../../servercommunications/user-data-server-functions";
import { XDSDatasetItem } from "./xds-dataset-item";
import { EditDatasetDetailsComponent } from "../../dataset/edit-dataset-details/edit-dataset-details.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-datasets',
  templateUrl: './user-datasets.component.html',
  styleUrls: ['./user-datasets.component.css']
})
export class UserDatasetsComponent implements OnInit {

  constructor(private router: Router) { }
  userId = localStorage.getItem('userID');
  filesArr = Array();
  metadataArr = Array();
  ngOnInit(): void {
    UserDataServerFunctions.UserDatasets(Number(this.userId))
    .then
    (
      res => 
      {
        const iterator = res.values();
        for (const value of iterator) {  
          this.filesArr.push(value);
        }
        
      }
    );

    UserDataServerFunctions.UserDatasetsMetadata(Number(this.userId))
    .then
    (
      res => 
      {
        const iterator = res.values();
        for (const value of iterator) { 
          var x = new XDSDatasetItem();
          x = value;
          this.metadataArr.push(x);
        }
      }
        
      
    );
  }  
  InfoFunctionBtnClicked(i:any){
    console.log(this.metadataArr[i]);
    var ele = document.getElementById(this.metadataArr[i].dataset_name) as HTMLDivElement;
    ele.style.display = "flex"

  }

  EditFunctionBtnClicked(i:any){
    console.log(this.metadataArr[i]);
    EditDatasetDetailsComponent.datasetName = this.metadataArr[i].dataset_name;
    this.router.navigateByUrl('/editdataset');
  }

  OpenFunctionBtnClicked(i:any){
    console.log(this.metadataArr[i]);


  }
  DeleteFunctionBtnClicked(i:any){
    console.log(this.metadataArr[i]);
  }

  CloseDetailClicked(i:any){
    var ele = document.getElementById(this.metadataArr[i].dataset_name) as HTMLDivElement;
    ele.style.display = "none"

  }
}
