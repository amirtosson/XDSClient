import { Component, OnInit,Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ServerFunctions } from "../../server-communications/server-functions";
import { OneDimSimulatedDataset } from "../../objects/one-dim-simulated-dataset";
import { SimulatedDatasetService } from "../../services/simulated-dataset.service";
import { PlottingScenesService } from "../../services/plotting-scenes.service";
import { SavedDatasetsService } from "../../services/saved-datasets.service";

@Component({
  selector: 'app-generate-data-set',
  templateUrl: './generate-data-set.component.html',
  styleUrls: ['./generate-data-set.component.css']
})

@Injectable()
export class GenerateDataSetComponent implements OnInit {
  SimDatasets : OneDimSimulatedDataset[] = [];
  availableCharts: string[] = [];
  newDataForm : FormGroup;
  nameIsUsed = false
  constructor
  (
    private dataService:SimulatedDatasetService,
    private pSS:PlottingScenesService,
    private formBuilder: FormBuilder,
    private sDS:SavedDatasetsService
  ){ 

   this.newDataForm =  this.formBuilder.group(
      {
        title:new FormControl("mydataset",
        [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]*")
        ]),
        constant:new FormControl(1,
        [
          Validators.required,
          Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")
        ]),
        beta:new FormControl(0.5,
        [
          Validators.required,
          Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")
        ]),
        gamma:new FormControl(0.5,
        [
          Validators.required,
          Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")
        ]),
        noiseFactor:new FormControl(0.5,
        [
          Validators.required,
          Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")
        ]),
        numberOfPoints:new FormControl(64,
        [
          Validators.required,
          Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")
        ]),
      }
    );
  }

  ngOnInit(): void {
    this.availableCharts = this.pSS.sceneNames
    this.sDS.savedDatasetToBeUsed.subscribe(ds=>{
      if (ds.DOI == undefined) return
      ServerFunctions.GetDatasetParasByDOI(ds.DOI, sessionStorage.getItem('userID'))
      .then(res =>{
        ds.denoised = res.denoised
        ds.pure = res.pure
        ds.noisy = res.noisy
        ds.time = res.time
        this.SimDatasets.push(ds)
       })
    })
  }

  IsNameUsed(datasetName:string){
   
    for (let index = 0; index < this.SimDatasets.length; index++) {
      if (datasetName === this.SimDatasets[index].name){
        
        this.nameIsUsed = true;
        return 
      }
      this.nameIsUsed = false;
      
    }
    
  }
  OpenGenerateDataFlyingForm(){
    this.IsNameUsed(this.newDataForm.controls["title"].value)
    this.DisableElements(true);
  }

  RemoveAllDatasets(){
    this.SimDatasets = []
    const datasetCards = document.querySelectorAll('.dataset-card');

    datasetCards.forEach(card => {
      card.remove();
    });
  }

  AddSavedDataset(name:string){

  }

  GetDataParas(){
    this.DisableElements(false);
    ServerFunctions.GenerateDataset(
      this.newDataForm.controls['title'].value,
      this.newDataForm.controls['constant'].value,
      this.newDataForm.controls['beta'].value,
      this.newDataForm.controls['gamma'].value,
      this.newDataForm.controls['noiseFactor'].value,
      this.newDataForm.controls['numberOfPoints'].value,
    ).then(res => {
      var ds =new OneDimSimulatedDataset
      ds.ID = this.SimDatasets.length + 1
      ds.pure = res.pure 
      ds.noisy = res.noisy
      ds.time = res.time
      ds.DOI = 'notSaved'
      ds.date = this.GetTimeWithFormatAsString()
      ds.name = this.newDataForm.controls['title'].value
      ds.constant =  this.newDataForm.controls['constant'].value
      ds.gamma = this.newDataForm.controls['gamma'].value
      ds.beta = this.newDataForm.controls['beta'].value
      ds.noiseFactor = this.newDataForm.controls['noiseFactor'].value
      ds.size = this.newDataForm.controls['numberOfPoints'].value
      this.SimDatasets.push(ds)
    })
  }

  GetDataParasCancel(){
    this.DisableElements(false);
  }

  DisableElements(disable = false, loader = false){
    var f = document.getElementById("dis-div") as HTMLDivElement;
    f.style.visibility=  disable?"visible":"hidden"
    if (loader) {
      f = document.getElementById("loader") as HTMLDivElement;
      f.style.visibility=  disable?"visible":"hidden"
        
    } else {
      f = document.getElementById("flying-form") as HTMLDivElement;
      disable?f.classList.add("flying-form-opened"):f.classList.remove("flying-form-opened")
    }
  }
  
  PlotDataset($elementID:string){
    this.availableCharts = this.pSS.sceneNames
    var d = document.getElementById($elementID ) as HTMLDivElement;
    if (this.availableCharts.length < 1) {
      window.alert('No Scene found, please add a new scene!')
      d.style.display = 'none'
    } else {
      
      if (d.style.display === 'block' ) {
        d.style.display = 'none'
      } else {
        d.style.display = 'block'
      }
    }
  } 

  PlotOnScene($chartName:{target:any;}, $dataset:OneDimSimulatedDataset){
    this.dataService.PlotDataset({
       dataset:$dataset,
      sceneID:$chartName
     })
  }

  DenoiseDataset($datasetname:string){
    this.DisableElements(true, true)
    var foundInd = -1
    for (let index = 0; index < this.SimDatasets.length; index++) {
      if (this.SimDatasets[index].name === $datasetname) {
        foundInd = index;
      } 
    }
    ServerFunctions.DenoiseDataset
    (
      this.SimDatasets[foundInd].noisy
    ).then(res => {
      this.SimDatasets[foundInd].denoised = res.denoised
    }).then(r =>{      
      this.DisableElements(false, true)
    }
    )

  }

  SaveDataset(datasetName:string){
   this.DisableElements(true, true)
    var dS = this.SimDatasets.find((obj)=>{
      return obj.name = datasetName
    })
    sessionStorage.getItem('userID')
    ServerFunctions.SaveDataset(JSON.stringify(dS), sessionStorage.getItem('userID'))
    .then( res => {
      this.DisableElements(false, true)
      dS!.DOI = res.DOI
    })
    .then(()=>{
      this.sDS.newDataSaved(true);
    })
    
  }

  GetTimeWithFormatAsString(){
    var date = new Date();
    var dateFormated =
      [
        date.getFullYear(),
        (date.getMonth() + 1).toString().padStart(2, '0'),
        (date.getDate()).toString().padStart(2, '0'),
      ].join('.') +
      ' ' +
      [
        (date.getHours()).toString().padStart(2, '0'),
        (date.getMinutes()).toString().padStart(2, '0')
      ].join(':')
      return dateFormated
  }
  


}
