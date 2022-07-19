import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlottingScenesService {

  public sceneNames: string[] = [];
  constructor() { }
  AddScene(sceneName:string){
    this.sceneNames.push(sceneName)
  }

  RemoveAll(){
    this.sceneNames =[]
  }
}
