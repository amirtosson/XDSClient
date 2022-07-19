import { Component, OnInit,ViewChild } from '@angular/core';
import { GenerateData } from './unittest';
import { GenerateDataSetComponent } from "./components/generate-data-set/generate-data-set.component";
import { PlottingSceneComponent } from "./components/plotting-scene/plotting-scene.component";
import { SimulatedDatasetService } from "./services/simulated-dataset.service";
import { PlottingScenesService } from "./services/plotting-scenes.service";

@Component({
  selector: 'app-one-dim-corr-fn-autoencoder',
  templateUrl: './one-dim-corr-fn-autoencoder.component.html',
  styleUrls: ['./one-dim-corr-fn-autoencoder.component.css']
})
export class OneDimCorrFnAutoencoderComponent implements OnInit {
  
  // View Childern
  @ViewChild(GenerateDataSetComponent) _dG?: GenerateDataSetComponent;
  @ViewChild(PlottingSceneComponent) _pS?: PlottingSceneComponent;

  
  details = {
    dginfo:"To simulate 1D correlation function data and add noise.",
    chartsinfo:"To plot the generated datasets.",
    tablesinfo:"Information about generated datasets."
  }

  constructor(private datasetService:SimulatedDatasetService, 
     private plottingServeice:PlottingScenesService ) {
   }

  ngOnInit(): void { 
    this.datasetService.requiredToBePloted.subscribe(datasetObj =>{
      this.PlotData(datasetObj.datasetID,datasetObj.sceneID)
    });
  }

  PlotData(datasetID = 0, sceneID = ''){
    this._pS?.PlotData(
      this._dG?.SimDatasets[datasetID-1].time!, 
      [this._dG?.SimDatasets[datasetID-1].pure!,this._dG?.SimDatasets[datasetID-1].noisy!,this._dG?.SimDatasets[datasetID-1].denoised!],
      sceneID!,
      this._dG?.SimDatasets[datasetID-1].name!)
    
  }

  GenerateData(){
    console.log(this._dG?.SimDatasets)
    //this._pS?.PlotData(this.dg.unitTest[0].time, this.dg.unitTest[0].corr)
    // let clone = JSON.parse(JSON.stringify(this.lineChartData));
    // clone.datasets[0].data = this.dg.unitTest[0].corr
    // clone.datasets.push({data:this.dg.unitTest[0].corr})
    // clone.labels = this.dg.unitTest[0].time
    // this.lineChartData = clone
    //console.log(this.dg.unitTest[0].corr)
   }

   Reset(){
    console.log(this.plottingServeice.sceneNames)
   }



   ShowHideSection($event:{target:any;}){
    console.log($event.target.id)
    var el = document.getElementById($event.target.id + "-d") as HTMLDivElement;
    if ($event.target.checked) {
      el.style.animation = "fadeIn 2s"
      el.style.display = 'block'    
    } else {
      el.style.animation = "fadeOut 2s"
      el.style.display = 'none' 
    }
   }

   ShowDetails($event:{target:any;}){
    const name = $event.target.id ;
    window.alert(this.lookup(this.details, $event.target.id) );

   }

  lookup(obj : object, key : string) : any {
    return key.split(".").reduce((o, k) => o ? (o as any)[k] : undefined, obj);

}

  OpenGenerateDataFlyingForm(){
    this._dG?.OpenGenerateDataFlyingForm()
  }

}
