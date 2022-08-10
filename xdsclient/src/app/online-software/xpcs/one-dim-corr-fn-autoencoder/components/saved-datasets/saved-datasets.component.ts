import { Component, OnInit } from '@angular/core';
import { OneDimSimulatedDataset } from "../../objects/one-dim-simulated-dataset";
import { ServerFunctions } from "../../server-communications/server-functions";
import { SavedDatasetsService } from "../../services/saved-datasets.service";

@Component({
  selector: 'app-saved-datasets',
  templateUrl: './saved-datasets.component.html',
  styleUrls: ['./saved-datasets.component.css']
})
export class SavedDatasetsComponent implements OnInit {
  savedDatasets: OneDimSimulatedDataset[] = []
  constructor(private sDS: SavedDatasetsService) { 
    this.sDS.newData.subscribe(()=>{
      this.GetSavedDatasets()
    })
  }

  ngOnInit(): void {
    this.GetSavedDatasets()
  }

  GetSavedDatasets(){
    this.savedDatasets = []

    ServerFunctions.GetSavedDatasets(sessionStorage.getItem('userID'))
    .then
    (res =>
      {
        this.savedDatasets = []
        if(res.files == undefined)return
        for (let index = 0; index < res.files.length; index++) 
        {
          const fileName = res.files[index].split('_');  
          var ds = new OneDimSimulatedDataset;
          ds.name = fileName[0]
          ds.constant = fileName[2]
          ds.noiseFactor = fileName[3]
          ds.size = fileName[4]
          ds.beta = fileName[5]
          ds.gamma = fileName[6]
          ds.date = fileName[7]+'.'+fileName[8]+'.'+fileName[9]+' '+fileName[10]+':'+fileName[11].split('.')[0] 
          ds.DOI = [
            fileName[0],
            sessionStorage.getItem('userID'),
            fileName[2],
            fileName[3],
            fileName[4],
            fileName[5],
            fileName[6],
            fileName[7]+'_'+fileName[8]+'_'+fileName[9]+'_'+fileName[10]+'_'+fileName[11].split('.')[0] 
          ].join('_')
          ds.inUse = false
          this.savedDatasets.push(ds)    
        }
      }
    )
  }

  UseDataset(dataset:OneDimSimulatedDataset){
    this.sDS.UseSavedDataset(dataset)

  }

  DeleteDataset(datasetName:string){
    ServerFunctions.DeleteSavedDatasetByDOI(datasetName,sessionStorage.getItem('userID'))
    .then(res =>{
      if (res.deleted) {
        this.GetSavedDatasets()
      }
      console.log(res)
    })
  }
}
