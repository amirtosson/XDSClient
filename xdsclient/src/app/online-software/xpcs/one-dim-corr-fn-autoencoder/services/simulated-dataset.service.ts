import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OneDimSimulatedDataset } from "../objects/one-dim-simulated-dataset";

@Injectable({
  providedIn: 'root'
})

export class SimulatedDatasetService {
  public requiredToBePloted = new BehaviorSubject({
    dataset:OneDimSimulatedDataset.prototype,
    sceneID:''
  });



  constructor() { }
  PlotDataset(dataToPlot:any) {
    this.requiredToBePloted.next(dataToPlot);
  }



}
