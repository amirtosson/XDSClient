import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {
  public isLogged = new BehaviorSubject(false);
  public isLanding = new BehaviorSubject(false);


  constructor() { }

  setLoggingState(isLogged:boolean) {
    this.isLogged.next(isLogged);
  }

  setHeaderBarItems(isLanding:boolean) {
    this.isLanding.next(isLanding);
  }
}