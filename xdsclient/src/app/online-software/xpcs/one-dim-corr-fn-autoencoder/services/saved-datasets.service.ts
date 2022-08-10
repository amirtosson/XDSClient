import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OneDimSimulatedDataset } from "../objects/one-dim-simulated-dataset";

@Injectable({
  providedIn: 'root'
})
export class SavedDatasetsService {
  public newData = new BehaviorSubject(false);
  public savedDatasetToBeUsed = new BehaviorSubject(OneDimSimulatedDataset.prototype);

  constructor() { }
  newDataSaved(update:boolean) {
    this.newData.next(update);
  }

  UseSavedDataset(dataset:OneDimSimulatedDataset){
    this.savedDatasetToBeUsed.next(dataset)
  }
}
