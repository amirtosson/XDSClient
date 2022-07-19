import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SimulatedDatasetService {
  public requiredToBePloted = new BehaviorSubject({
    datasetID:0,
    sceneID:''
  });

  constructor() { }
  PlotDataset(dataToPlot:any) {
    this.requiredToBePloted.next(dataToPlot);
  }

}
