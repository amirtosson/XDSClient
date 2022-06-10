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

  hasRawData = false
  hasMetaData = false
  hasReadMe = false
  constructor(private router: Router) { }
  userId = sessionStorage.getItem('userID');
  filesArr = Array();
  metadataArr = Array();
  ngOnInit(): void {
    this.CloseAll()
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
          if (x.hasmetadata === 1) {
            this.hasMetaData = true
          } 
          if (x.hasrawdata === 1) {
            this.hasRawData = true
          } 
          if (x.hasreadme === 1) {
            this.hasReadMe = true
          } 

          this.metadataArr.push(x);
        }
      }
        
      
    );
  }  

  InfoFunctionBtnClicked(i:any){
    this.CloseAll()
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
    ele.style.display = "none";

  }

  CloseAll(){
    var eles = document.getElementsByClassName("dataset-details") as HTMLCollectionOf<HTMLDivElement>;

    for (var i = 0; i < eles.length; i++) {
      eles[i].style.display = "none";
    }
    
  }
}


